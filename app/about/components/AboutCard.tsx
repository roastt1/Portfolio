"use client";

import { LucideIcon } from "lucide-react";

interface AboutCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
}

export default function AboutCard({
    title,
    description,
    icon: Icon,
    delay = 0,
}: AboutCardProps) {
    return (
        <div
            className="group w-full"
            data-aos="fade-up"
            data-aos-delay={delay}
            data-aos-duration="800"
        >
            <div className="relative flex min-h-[80px] w-full flex-row items-center gap-2 rounded-xl border border-black/15 bg-white/50 p-3 transition-all duration-300 dark:border-white/15 dark:bg-dark-200/50 sm:min-h-[160px] sm:flex-col sm:justify-center sm:gap-3 sm:rounded-2xl sm:p-6 sm:text-center">
                {/* 아이콘 영역 */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-300/20 text-blue-600 dark:bg-dark-300 dark:text-white sm:h-14 sm:w-14 sm:rounded-xl">
                    <Icon size={18} className="sm:size-8" />
                </div>

                {/* 텍스트 영역 */}
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:w-full sm:gap-1">
                    <h2 className="text-[10px] font-bold text-gray-400 dark:text-gray-400 sm:text-sm">
                        {title}
                    </h2>
                    <p className="break-all text-xs font-bold text-gray-800 dark:text-gray-100 sm:text-base sm:text-gray-600 sm:dark:text-white">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
