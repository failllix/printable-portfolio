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

      const phoneNumber = import.meta.env.PUBLIC_PHONE_NUMBER_DISPLAY;
      const phoneNumberHref = import.meta.env.PUBLIC_PHONE_NUMBER_HREF;
      if (phoneNumber && phoneNumberHref) {
        personalDetails[0].links = [
          {
            name: phoneNumber,
            printName: phoneNumber,
            href: phoneNumberHref,
            printUnderline: false,
          },
          ...personalDetails[0].links,
        ];
      }

      return personalDetails;
    },
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
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

export const collections = {
  projects: projectsCollection,
  certifications: certificationsCollection,
  experience: experienceCollection,
  education: educationCollection,
  personal: personalCollection,
};
