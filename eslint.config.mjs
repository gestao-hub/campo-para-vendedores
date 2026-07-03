import { globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([
    ".next/**",
    ".vercel/**",
    "campo-de-vendas/**",
    "node_modules/**",
    "out/**",
    "supabase/.temp/**",
    "next-env.d.ts"
  ])
];

export default eslintConfig;
