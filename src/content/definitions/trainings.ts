import { defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const trainings = defineCollection({
    name: "trainings",
    directory: "./trainings",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        imageDark: z.string(),
        imageLight: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        published: z.boolean(),
        tags: z.array(z.string()),
        serial: z.number(),
    }),
    transform: async (training, ctx) => {
        const mdx = await compileMDX(ctx, training, {
            rehypePlugins: [rehypeSlug],
            remarkPlugins: [remarkGfm],
        });

        return {
            ...training,
            content: {
                mdx,
                raw: training.content,
            },
            url: `/trainings/${training.slug}`,
        };
    },
});
