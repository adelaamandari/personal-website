import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    thumbnail: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};