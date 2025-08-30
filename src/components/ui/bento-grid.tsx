"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    rowSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-white/20 bg-white/10 backdrop-blur-md",
                        "hover:bg-white/15 hover:-translate-y-1 will-change-transform",
                        item.colSpan ? `md:col-span-${item.colSpan}` : "md:col-span-1",
                        item.rowSpan ? `md:row-span-${item.rowSpan}` : "md:row-span-1"
                    )}
                >
                    <div className="relative flex flex-col justify-between h-full space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 group-hover:bg-gradient-to-br from-blue-400 to-purple-400 transition-all duration-300">
                                {item.icon}
                            </div>
                            {item.status && (
                                <span
                                    className={cn(
                                        "text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm",
                                        "bg-white/10 text-white/80"
                                    )}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2 flex-grow">
                            <h3 className="font-medium text-white tracking-tight text-lg">
                                {item.title}
                            </h3>
                            <p className="text-sm text-white/70 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2 text-xs text-white/60">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-white/5 backdrop-blur-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { BentoGrid }
