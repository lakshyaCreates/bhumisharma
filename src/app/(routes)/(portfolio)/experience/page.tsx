import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

import { ExperienceItem } from "./experience-item";

export default function ExperiencePage() {
    const { experience } = site;

    return (
        <div className="flex flex-col gap-6 divide-y">
            {experience.map((item, idx) => (
                <ExperienceItem
                    key={`exp-${item.title}`}
                    {...item}
                    className={cn("", idx > 0 ? "pt-6" : "pt-1")}
                />
            ))}
        </div>
    );
}
