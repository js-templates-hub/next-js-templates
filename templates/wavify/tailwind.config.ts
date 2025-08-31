import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "inherit",
            a: { color: "inherit", textDecoration: "underline" },
            strong: { color: "inherit" },
            h1: { color: "inherit" },
            h2: { color: "inherit" },
            h3: { color: "inherit" },
            h4: { color: "inherit" },
            ul: { color: "inherit", textAlign: "left" },
            ol: {
              color: "inherit",
              textAlign: "left",
            },
            code: { color: "inherit" },
            blockquote: { color: "inherit" },
            "ul > li::before": { backgroundColor: "inherit" },
            "ol > li[data-list='ordered']": {
              listStyleType: "decimal",
            },
            "ol > li[data-list='bullet']": {
              listStyleType: "disc",
            },
            hr: { borderColor: "inherit" },
          },
        },
      }),
    },
  },
};

export default config;
