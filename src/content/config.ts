import { z, defineCollection } from "astro:content";

const nameLink = z.object({
  name: z.string(),
  link: z.string(),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    skills: z.array(z.string()),
    coverImagePath: z.string(),
    coverAlt: z.string(),
    coCreators: z.array(nameLink),
    excerpt: z.string(),
    gitHubLink: z.string().optional(),
    isWorkInProgress: z.boolean().optional(),
  }),
});

const certificationsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    link: z.string(),
    icon: z.enum(["🥇", "🥈", "🥉", "📃"]).default("📃"),
  }),
});

export const collections = {
  projects: projectsCollection,
  certifications: certificationsCollection,
};
