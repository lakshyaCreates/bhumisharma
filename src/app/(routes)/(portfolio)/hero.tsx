import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaRss } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { PiReadCvLogo } from "react-icons/pi";

import Link from "next/link";

import { site } from "@/lib/site";

import { LinkPreview } from "@/components/aceternity/link-preview";
import { ScheduleCal } from "@/components/cal";
import { IconMap } from "@/components/icon-map";
import { ThemeToggler } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { env } from "@/env/client";

export const Hero = () => {
    const { hero } = site;

    return (
        <div className="flex flex-col items-start justify-start gap-y-6">
            <Link
                href={`${env.NEXT_PUBLIC_BASE_URL}`}
                className="text-sm font-medium text-neutral-700 underline dark:text-neutral-200"
            >
                {hero.site.trim().replace(/https?:\/\//, "")}
            </Link>
            <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold tracking-tight md:font-bold lg:text-4xl">
                        {hero.name}
                    </h1>
                    <div className="flex items-center gap-x-1">
                        <Button
                            asChild
                            size={"icon"}
                            variant={"ghost"}
                            className="rounded-full"
                        >
                            <Link
                                href={`${env.NEXT_PUBLIC_BASE_URL}/feed`}
                                type="application/xml"
                            >
                                <FaRss />
                            </Link>
                        </Button>
                        <ThemeToggler />
                    </div>
                </div>
                <div className="text-muted-foreground">{hero.phrase}</div>
            </div>
            <div className="max-w-2xl tracking-wide text-neutral-700 dark:text-neutral-300 [&>span]:font-semibold [&>span]:text-primary">
                {hero.description.props.children}
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <ScheduleCal />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild size="default" variant={"outline"}>
                                <Link
                                    target="_blank"
                                    download={hero.resumePath}
                                    href={hero.resumePath}
                                >
                                    <PiReadCvLogo />
                                    Career Profile
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="border bg-background text-primary">
                            Last Updated -{" "}
                            <span className="font-medium">
                                {hero.resumeUpdated}
                            </span>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {hero.socials.map((link, idx) => (
                    <TooltipProvider key={idx}>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    asChild
                                    size={"icon"}
                                    variant={"outline"}
                                >
                                    <Link href={link.url}>
                                        {
                                            IconMap[
                                                link.label.toLowerCase() as keyof typeof IconMap
                                            ]
                                        }
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="border bg-background text-primary">
                                <Link href={link.url}>{link.label}</Link>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
            <Separator />
            <div className="flex max-w-[95%] flex-col gap-2">
                {hero.skills.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex max-w-2xl flex-wrap items-center gap-x-1 text-sm"
                    >
                        <span className="font-medium">{item.label}: </span>
                        {item.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="cursor-pointer !text-muted-foreground transition-colors duration-150 ease-in hover:!text-black dark:hover:!text-white"
                            >
                                <span className="group-hover:!text-white">
                                    {tag}
                                    <span>
                                        {idx !== item.tags.length - 1 && ", "}
                                    </span>
                                </span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
