import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createAsaasCustomer,
  createAsaasPayment,
  getPaymentCheckoutUrl
} from "@/lib/payments/asaas";
import { getProductConfig } from "@/lib/product";
import { attachGatewayPayment, createPendingOrder } from "@/lib/orders";

const checkoutSchema = z.object({
  productSlug: z.string().min(1),
  name: z.string().min(3, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail valido."),
  cpfCnpj: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = checkoutSchema.parse(await request.json());
    const product = getProductConfig();

    if (body.productSlug !== product.slug) {
      return NextResponse.json(
        { error: "Produto indisponivel." },
        { status: 404 }
      );
    }

    const order = await createPendingOrder({
      customerName: body.name,
      customerEmail: body.email,
      customerDocument: body.cpfCnpj
    });

    const customer = await createAsaasCustomer({
      name: body.name,
      email: body.email,
      cpfCnpj: body.cpfCnpj
    });

    const payment = await createAsaasPayment({
      customerId: customer.id,
      orderId: order.id,
      valueCents: product.priceCents,
      description: product.name
    });

    const checkoutUrl = getPaymentCheckoutUrl(payment);

    if (!checkoutUrl) {
      throw new Error("Asaas nao retornou URL de pagamento.");
    }

    await attachGatewayPayment({
      orderId: order.id,
      gatewayCustomerId: customer.id,
      gatewayPaymentId: payment.id,
      checkoutUrl
    });

    return NextResponse.json({
      orderId: order.id,
      checkoutUrl
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao iniciar checkout.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
