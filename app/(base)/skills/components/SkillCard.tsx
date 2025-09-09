"use client";

import Image from "next/image";

interface SkillCardProps {
    icon: string;
    name: string;
    animationDelay?: string;
}

export default function SkillCard({
    icon,
    name,
    animationDelay = "0s",
}: SkillCardProps) {
    return (
        <div className="animate-slide-up">
            <div
                className="flex h-32 w-32 select-none flex-col items-center justify-center rounded-2xl border-2 border-blue-100 bg-white/80 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/80 hover:shadow-2xl"
                style={{ animationDelay }}
            >
                <div className="mb-4">
                    <Image src={icon} alt={name} width={48} height={48} />
                </div>
                <p className="text-base font-semibold lg:text-lg">{name}</p>
            </div>
        </div>
    );
}
