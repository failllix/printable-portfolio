import { file } from "astro/loaders";
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

const coverLetterCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    address: z.array(z.string()),
    company: z.string(),
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

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    employer: z.string(),
    role: z.string(),
    location: z.string(),
    rawFrom: z.string().date(),
    rawTo: z.string().date(),
    from: z.string(),
    to: z.string(),
    bullets: z.array(z.string()),
  }),
});

const educationCollection = defineCollection({
  type: "data",
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    location: z.string(),
    from: z.string(),
    to: z.string(),
    bullets: z.array(z.string()),
    grade: z.number(),
  }),
});

const personalCollection = defineCollection({
  loader: file("src/data/personalDetails.json", {
    parser: (fileContent) => {
      const personalDetails = JSON.parse(fileContent);

      return personalDetails;
    },
  }),
  schema: z.object({
    name: z.string(),
    cvFilename: z.string(),
    jobName: z.string(),
    summary: z.string(),
    location: z.string(),
    links: z.array(
      z.object({
        name: z.string(),
        printName: z.string(),
        printUnderline: z.boolean(),
        href: z.string(),
      })
    ),
    languages: z.array(z.string()),
    technicalSkills: z.array(z.string()),
    organizationalSkills: z.array(z.string()),
  }),
});

const privatePersonalCollection = defineCollection({
  loader: file("src/data/privatePersonalDetails.json", {
    parser: (fileContent) => {
      const privatePersonalDetails = JSON.parse(fileContent);

      return privatePersonalDetails;
    },
  }),
  schema: z.object({
    address: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  "cover-letters": coverLetterCollection,
  certifications: certificationsCollection,
  experience: experienceCollection,
  education: educationCollection,
  personal: personalCollection,
  "private-personal": privatePersonalCollection,
};
