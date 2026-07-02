import crypto from "node:crypto";
import { getServerEnv } from "@/lib/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export function createPlainAccessToken() {
  return crypto.randomBytes(32).toString("hex");
}

export function hashAccessToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function createAccessToken(orderId: string) {
  const supabase = createSupabaseAdminClient();
  const token = createPlainAccessToken();
  const tokenHash = hashAccessToken(token);
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  const { data, error } = await supabase
    .from("access_tokens")
    .insert({
      order_id: orderId,
      token_hash: tokenHash,
      expires_at: expiresAt.toISOString()
    })
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return {
    token,
    accessToken: data
  };
}

export async function validateAccessToken(token: string) {
  const supabase = createSupabaseAdminClient();
  const tokenHash = hashAccessToken(token);

  const { data: accessToken, error: accessError } = await supabase
    .from("access_tokens")
    .select("*")
    .eq("token_hash", tokenHash)
    .maybeSingle();

  if (accessError) {
    throw accessError;
  }

  if (!accessToken) {
    return { ok: false as const, reason: "Link de acesso nao encontrado." };
  }

  if (accessToken.revoked_at) {
    return { ok: false as const, reason: "Este acesso foi revogado." };
  }

  if (new Date(accessToken.expires_at).getTime() < Date.now()) {
    return { ok: false as const, reason: "Este link de acesso expirou." };
  }

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*")
    .eq("id", accessToken.order_id)
    .maybeSingle();

  if (orderError) {
    throw orderError;
  }

  if (!order || order.status !== "paid") {
    return {
      ok: false as const,
      reason: "O pagamento ainda nao foi confirmado para este acesso."
    };
  }

  return { ok: true as const, accessToken, order };
}

export async function markAccessTokenUsed(accessTokenId: string) {
  const supabase = createSupabaseAdminClient();

  await supabase
    .from("access_tokens")
    .update({ last_used_at: new Date().toISOString() })
    .eq("id", accessTokenId);
}

export async function revokeAccessTokensForOrder(orderId: string) {
  const supabase = createSupabaseAdminClient();

  const { error } = await supabase
    .from("access_tokens")
    .update({ revoked_at: new Date().toISOString() })
    .eq("order_id", orderId)
    .is("revoked_at", null);

  if (error) {
    throw error;
  }
}

export async function createCourseSignedUrl() {
  const env = getServerEnv();
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase.storage
    .from(env.SUPABASE_STORAGE_BUCKET)
    .createSignedUrl(env.COURSE_FILE_PATH, 60 * 10);

  if (error) {
    throw error;
  }

  return data.signedUrl;
}
