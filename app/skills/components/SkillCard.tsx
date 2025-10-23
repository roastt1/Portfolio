"use client";

import Image from "next/image";

interface SkillCardProps {
    icon: string;
    name: string;
}

export default function SkillCard({ icon, name }: SkillCardProps) {
    return (
        <div data-aos="zoom-in" data-aos-duration="600">
            <div className="flex h-24 w-24 select-none flex-col items-center justify-center rounded-2xl border-2 border-blue-100 bg-white/80 p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/80 hover:shadow-2xl dark:border-dark-400 dark:bg-dark-300 dark:text-white sm:h-32 sm:w-32">
                <div className="mb-3 sm:mb-4">
                    <Image src={icon} alt={name} width={40} height={40} />
                </div>
                <p className="text-sm font-semibold sm:text-base md:text-lg">
                    {name}
                </p>
            </div>
        </div>
    );
}
