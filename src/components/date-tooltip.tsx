import { cn } from "@/lib/utils";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

export const DateTooltip = ({
    className,
    children,
    tip,
}: {
    className?: string;
    children: React.ReactNode;
    tip: string;
}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="rounded border bg-accent px-1.5 py-1 text-xs">
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className={cn(
                        "border bg-background text-foreground",
                        className,
                    )}
                >
                    {tip}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
