import { spawnSync } from "node:child_process";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const siteUrl = process.env.VERCEL_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL;

const variables = {
  NEXT_PUBLIC_SITE_URL: siteUrl,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_STORAGE_BUCKET: process.env.SUPABASE_STORAGE_BUCKET,
  COURSE_FILE_PATH: process.env.COURSE_FILE_PATH,
  PRODUCT_SLUG: process.env.PRODUCT_SLUG,
  PRODUCT_NAME: process.env.PRODUCT_NAME,
  PRODUCT_PRICE_CENTS: process.env.PRODUCT_PRICE_CENTS,
  ASAAS_ENV: process.env.ASAAS_ENV,
  ASAAS_API_KEY: process.env.ASAAS_API_KEY,
  ASAAS_WEBHOOK_TOKEN: process.env.ASAAS_WEBHOOK_TOKEN,
  ASAAS_WEBHOOK_EMAIL: process.env.ASAAS_WEBHOOK_EMAIL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  FROM_EMAIL: process.env.FROM_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
};

const sensitive = new Set([
  "SUPABASE_SERVICE_ROLE_KEY",
  "ASAAS_API_KEY",
  "ASAAS_WEBHOOK_TOKEN",
  "RESEND_API_KEY",
  "ADMIN_PASSWORD"
]);

const targets = (process.env.VERCEL_ENV_TARGETS || "production")
  .split(",")
  .map((target) => target.trim())
  .filter(Boolean);

for (const target of targets) {
  for (const [key, value] of Object.entries(variables)) {
    if (!value) {
      console.log(`skip ${key} for ${target}`);
      continue;
    }

    const args = ["env", "add", key, target, "--yes", "--force"];

    if (sensitive.has(key)) {
      args.push("--sensitive");
    }

    const result = spawnSync("vercel", args, {
      input: `${value}\n`,
      encoding: "utf8"
    });

    if (result.status !== 0) {
      console.error(result.stderr || result.stdout);
      process.exit(result.status ?? 1);
    }

    console.log(`set ${key} for ${target}`);
  }
}
