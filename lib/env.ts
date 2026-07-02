const requiredServerEnv = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "SUPABASE_STORAGE_BUCKET",
  "COURSE_FILE_PATH",
  "PRODUCT_SLUG",
  "PRODUCT_NAME",
  "PRODUCT_PRICE_CENTS",
  "ASAAS_ENV",
  "ASAAS_API_KEY",
  "ASAAS_WEBHOOK_TOKEN"
] as const;

type RequiredServerEnv = (typeof requiredServerEnv)[number];

export function getServerEnv() {
  const missing = requiredServerEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }

  return requiredServerEnv.reduce(
    (env, key) => {
      env[key] = process.env[key] as string;
      return env;
    },
    {} as Record<RequiredServerEnv, string>
  );
}

export function getOptionalEnv(key: string) {
  return process.env[key] || "";
}
