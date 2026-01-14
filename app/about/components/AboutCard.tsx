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
            className="group flex h-full w-full"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-[#1A1C20] sm:gap-6 sm:p-8">
                {/* 배경 장식 */}
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-500/10 transition-all group-hover:scale-110 dark:bg-blue-500/10 sm:h-24 sm:w-24" />

                {/* 아이콘 영역 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-white/5 dark:text-blue-400 sm:h-14 sm:w-14">
                    <Icon size={20} className="sm:size-7" />
                </div>

                {/* 텍스트 영역 */}
                <div className="flex w-full min-w-0 flex-1 flex-col justify-between gap-1 sm:gap-2">
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-blue-500/80 sm:text-sm">
                            {title}
                        </span>

                        <div className="relative w-fit max-w-full">
                            {" "}
                            <p className="break-words text-[10px] font-bold text-gray-800 dark:text-gray-100 sm:text-lg">
                                {description}
                            </p>
                            <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
