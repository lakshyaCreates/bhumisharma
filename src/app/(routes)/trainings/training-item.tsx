"use client";

import { FaCaretRight } from "react-icons/fa6";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { Training } from "content-collections";

import { DateTooltip } from "@/components/date-tooltip";
import { IconMap } from "@/components/icon-map";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export const TrainingItem = ({
    title,
    description,
    date,
    content,
    imageDark,
    imageLight,
    slug,
    tags,
    url,
}: Training) => {
    const { theme } = useTheme();

    return (
        <div className="relative grid w-full grid-cols-1 gap-6 rounded-lg border bg-transparent p-4 xl:grid-cols-5">
            <Spotlight
                className="from-stone-500 via-stone-500 to-stone-600 blur-3xl dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-400"
                size={96}
            />
            <div className="z-10 col-span-1 flex flex-col justify-between gap-y-6 xl:col-span-3">
                <div className="space-y-2">
                    <Link href={url} className="group">
                        <h3 className="mt-0.5 line-clamp-2 text-xl font-bold tracking-tight text-foreground">
                            {title}
                        </h3>
                    </Link>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="rounded bg-accent px-1.5 py-1 text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="col-span-1 xl:col-span-2">
                <div className="group relative aspect-video h-full w-full overflow-hidden rounded-lg *:rounded-lg">
                    <Link href={url} className="relative h-full w-full">
                        <div className="absolute z-[9999] min-h-full min-w-full rounded-lg border bg-transparent opacity-0 transition-opacity duration-150 ease-in group-hover:opacity-100"></div>
                        {theme === "dark" ? (
                            <Image
                                src={imageDark}
                                alt={`Thumbnail - ${title}`}
                                width={2000}
                                height={2000}
                                quality={100}
                                className="size-full scale-100 transform-gpu object-cover transition-all duration-200 ease-in group-hover:scale-105"
                            />
                        ) : (
                            <Image
                                src={imageLight}
                                alt={`Thumbnail - ${title}`}
                                width={2000}
                                height={2000}
                                quality={100}
                                className="size-full scale-100 transform-gpu object-cover transition-all duration-200 ease-in group-hover:scale-105"
                            />
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};
