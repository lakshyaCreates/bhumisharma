import { JSX } from "react";

import { cn } from "@/lib/utils";

interface Props {
    title: string;
    duration: string;
    designation: string;
    location: string;
    content: JSX.Element;
    className?: string;
}

export const ExperienceItem = ({
    title,
    duration,
    designation,
    location,
    content,
    className,
}: Props) => {
    return (
        <div className={cn("", className)}>
            <div className="flex items-center justify-between gap-6">
                <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground">{duration}</p>
            </div>
            <div className="flex items-center justify-between gap-6 font-medium text-muted-foreground">
                <h3 className="text-lg">{designation}</h3>
                <p>{location}</p>
            </div>
            <ul className="ml-1 list-inside list-disc pt-4 text-base text-muted-foreground [&>li]:list-item">
                {content.props.children}
            </ul>
        </div>
    );
};
