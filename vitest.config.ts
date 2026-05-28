import { getViteConfig } from "astro/config";
import { coverageConfigDefaults } from "vitest/config";

export default getViteConfig(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {
    test: {
      coverage: {
        include: ["src/**/*"],
        exclude: [
          "src/assets",
          "src/content",
          "src/**/types.ts",
          "src/i18n/locales",
          ...coverageConfigDefaults.exclude,
        ],
      },
    },
  } as any,
  {
    i18n: {
      locales: ["es", "ja"],
      defaultLocale: "es",
    },
  }
);
