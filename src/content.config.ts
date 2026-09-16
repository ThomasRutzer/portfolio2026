import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const caseCollection = defineCollection({
  loader: glob({ base: "./src/content/cases", pattern: "**/*.json" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z.string().transform((str) => new Date(str)).optional(),
    by: z.union([
      z.string(),
      z.object({ label: z.string(), url: z.url() }),
    ]),
    tags: z
      .array(
        z.object({
          label: z.string(),
          type: z.enum(["engineering", "architecture"]),
        }),
      )
      .optional(),
    icon: z.enum(["twin", "orbit", "eclipse"]),
    link: z.string().optional(),
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(4)
      .optional(),
    status: z.enum(["planned", "progress", "deployed", "archived"]),
    businessCase: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          progress: z.number().min(0).max(100),
        }),
      )
      .optional(),
    team: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          progress: z.number().min(0).max(100),
        }),
      )
      .optional(),
    tech: z.array(z.string()),
  }),
});

export const collections = {
  cases: caseCollection,
};
