import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const caseCollection = defineCollection({
  loader: glob({ base: "./src/content/cases", pattern: "**/*.json" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    tags: z
      .array(
        z.object({
          label: z.string(),
          type: z.enum(["engineering", "architecture"]),
        }),
      )
      .optional(),
    icon: z.enum(["twin", "orbit", "eclipse"]),
    image: z.string().optional(),
    link: z.string().optional(),
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(4)
      .optional(),
    status: z.enum(["planned", "progress", "deployed", "archived"]),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          progress: z.number().min(0).max(100),
        }),
      )
      .optional(),
    achievements: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          progress: z.number().min(0).max(100),
        }),
      )
      .optional(),
    repoData: z
      .object({
        packageId: z.string(),
        match: z.number().min(0).max(100),
        verified: z.string(),
        region: z.string(),
        queueLabel: z.string(),
        latency: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  cases: caseCollection,
};
