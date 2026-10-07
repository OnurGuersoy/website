import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gigs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/gigs' }),
  schema: z.object({
    title: z.string(),
    band: z.string(),
    role: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    city: z.string(),
    description: z.string(),
    videoUrl: z.string().optional(),
    image: z.string().optional(),
    isFeatured: z.boolean().default(false),
    isUpcoming: z.boolean().default(true),
  }),
});

const techProjects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/tech-projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    problem: z.string(),
    solution: z.string(),
    techStack: z.array(z.string()),
    github: z.string().optional(),
    liveUrl: z.string().optional(),
    image: z.string().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = {
  gigs,
  techProjects,
};
