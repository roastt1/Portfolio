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
        <div
            className="flex h-32 w-32 animate-slide-up flex-col items-center justify-center rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            style={{ animationDelay }}
        >
            <div className="mb-4">
                <Image src={icon} alt={name} width={48} height={48} />
            </div>
            <p className="text-base font-semibold text-gray-800">{name}</p>
        </div>
    );
}
