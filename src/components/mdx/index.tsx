"use client";

import { MDXContent } from "@content-collections/mdx/react";

import NextImage from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { LinkPreview } from "@/components/aceternity/link-preview";
import { Button } from "@/components/ui/button";

import { Highlight } from "./highlight";

export const MDX = ({ content }: { content: string }) => {
    return (
        <MDXContent
            code={content}
            components={{ LinkPreview, Link, Button, Highlight, Image }}
        />
    );
};

const Image = ({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) => {
    return (
        <NextImage
            alt={alt}
            src={src}
            width={500}
            height={500}
            className={cn(
                "aspect-auto w-full rounded-xl object-cover object-center",
                className,
            )}
        />
    );
};
