// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "PPNeueMachina",
      cssVariable: "--font-title",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMachina-PlainUltrabold.otf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Geist",
      cssVariable: "--font-main",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Geist-VariableFont_wght.ttf"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],
});
