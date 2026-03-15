import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // Rules specifically targeting blog content files and API routes
    files: ["src/app/blog/**/*.tsx", "src/app/api/**/*.ts", "src/app/admin/**/*.tsx"],
    rules: {
      // Catches class= classname= tabindex= and any invalid DOM attribute
      "react/no-unknown-property": ["error", { "requireDataLowercase": true }],
      // No duplicate props on a JSX element
      "react/jsx-no-duplicate-props": "error",
      // No undefined components
      "react/jsx-no-undef": "error",
      // Warn on dangerouslySetInnerHTML
      "react/no-danger": "warn",
      // No nested components that cause remounts
      "react/no-unstable-nested-components": "error",
      // Catch common <a href> issues
      "jsx-a11y/anchor-is-valid": ["error", {
        "components": ["a"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["invalidHref", "preferButton"]
      }],
      // Catch <a> with no text content
      "jsx-a11y/anchor-has-content": "error",
      // Catch <img> without alt attribute
      "jsx-a11y/alt-text": "error",
    }
  }
]);

export default eslintConfig;
