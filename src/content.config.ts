// schemas for everything under src/content. the build fails with a clear
// message if a yaml or markdown file does not match, so a typo never ships.
import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "yaml";

// yaml list loader that remembers each entry's position, so pages can keep the file order
const yamlList = (path: string) =>
  file(path, {
    parser: (text) => (parse(text) as Record<string, unknown>[]).map((entry, i) => ({ ...entry, order: i })),
  });
const order = z.number();

const link = z.object({ label: z.string(), href: z.string() });

const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
  schema: z.object({ title: z.string() }),
});

const news = defineCollection({
  loader: yamlList("src/content/news.yaml"),
  schema: z.object({
    order,
    date: z.coerce.string(),
    text: z.string(),
    href: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: yamlList("src/content/education.yaml"),
  schema: z.object({
    order,
    school: z.string(),
    short: z.string(),
    degree: z.string(),
    period: z.string(),
    location: z.string().optional(),
    details: z.array(z.string()).default([]),
  }),
});

const experience = defineCollection({
  loader: yamlList("src/content/experience.yaml"),
  schema: z.object({
    order,
    kind: z.enum(["work", "leadership"]),
    org: z.string(),
    title: z.string(),
    location: z.string().optional(),
    period: z.string().optional(),
    upcoming: z.boolean().default(false),
    url: z.string().optional(),
    points: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: yamlList("src/content/projects.yaml"),
  schema: z.object({
    order,
    title: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    summary: z.string(),
    points: z.array(z.string()).default([]),
    links: z.array(link).default([]),
  }),
});

const papers = defineCollection({
  loader: yamlList("src/content/papers.yaml"),
  schema: z.object({
    order,
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    abstract: z.string().optional(),
    links: z.array(link).default([]),
  }),
});

const research = defineCollection({
  loader: yamlList("src/content/research.yaml"),
  schema: z.object({
    order,
    title: z.string(),
    org: z.string(),
    role: z.string(),
    period: z.string(),
    status: z.string().optional(),
    summary: z.string(),
    points: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    links: z.array(link).default([]),
  }),
});

const achievements = defineCollection({
  loader: yamlList("src/content/achievements.yaml"),
  schema: z.object({
    order,
    phase: z.enum(["University", "Pre-University"]),
    group: z.string(),
    badge: z.string(),
    title: z.string(),
    detail: z.string(),
  }),
});

const skills = defineCollection({
  loader: yamlList("src/content/skills.yaml"),
  schema: z.object({ order, label: z.string(), items: z.array(z.string()) }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(["Puzzles", "Essays", "Notes"]),
      // drafts render in `npm run dev` and are left out of the real build
      draft: z.boolean().default(false),
      cover: image().optional(),
    }),
});

const puzzles = defineCollection({
  loader: yamlList("src/content/puzzles.yaml"),
  schema: z.object({
    order,
    month: z.string(),
    title: z.string(),
    url: z.string().optional(),
    solved: z.boolean(),
    post: reference("writing").optional(),
  }),
});

export const collections = {
  pages,
  news,
  education,
  experience,
  projects,
  papers,
  research,
  achievements,
  skills,
  writing,
  puzzles,
};
