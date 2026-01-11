"use client";

import Image from "next/image";

interface SkillCardProps {
    icon: string;
    name: string;
}

export default function SkillCard({ icon, name }: SkillCardProps) {
    return (
        <div data-aos="zoom-in" data-aos-duration="600" className="group">
            <div className="relative flex h-20 w-20 select-none flex-col items-center justify-center rounded-2xl border border-blue-100 bg-white/80 p-3 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-blue-400 dark:border-gray-800 dark:bg-dark-300 dark:text-white sm:h-32 sm:w-32">
                <div className="mb-2 transition-transform duration-300 group-hover:scale-105 sm:mb-4">
                    <Image
                        src={icon}
                        alt={name}
                        width={48}
                        height={48}
                        className="h-9 w-9 sm:h-12 sm:w-12"
                    />
                </div>
                <p className="text-center text-xs font-bold tracking-tighter text-gray-600 dark:text-gray-300 sm:text-sm">
                    {name}
                </p>

                <div className="absolute bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-1/2" />
            </div>
        </div>
    );
}
