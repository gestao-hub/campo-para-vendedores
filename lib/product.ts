export function getProductConfig() {
  const priceCents = Number(process.env.PRODUCT_PRICE_CENTS ?? 4700);

  return {
    slug: process.env.PRODUCT_SLUG ?? "entre-em-campo",
    name:
      process.env.PRODUCT_NAME ??
      "Entre em Campo - Manual Oficial de Campo para Vendedores",
    priceCents,
    filePath:
      process.env.COURSE_FILE_PATH ?? "curso/ebook-entre-em-campo.pdf"
  };
}
