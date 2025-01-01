import { Training } from "content-collections";

import { MDX } from "@/components/mdx";

export const Content = ({ content }: Training) => {
    return (
        <div className="prose size-full dark:prose-invert">
            <MDX content={content.mdx} />
            <div className="h-6"></div>
        </div>
    );
};
