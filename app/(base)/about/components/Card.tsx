// app/about/page.tsx
"use client";

import Image from "next/image";

interface LandingCardProps {
    iconSrc: string;
    iconAlt: string;
    title: string;
    description: string;
    animationDelay?: string;
    buttonLabel?: string;
}

export default function Card({
    iconSrc,
    iconAlt,
    title,
    description,
    animationDelay = "0s",
}: LandingCardProps) {
    return (
        <div
            className="animate-fade-in-up flex h-[360px] transform flex-col rounded-xl bg-gray-100 p-8 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:bg-gray-100 hover:shadow-xl"
            style={{ animationDelay }}
        >
            {/* 아이콘 */}
            <div className="mb-6 flex justify-center">
                <Image src={iconSrc} alt={iconAlt} width={64} height={64} />
            </div>

            {/* 텍스트 그룹 */}
            <div className="flex flex-1 flex-col items-center justify-start">
                <h2 className="text-h2 mb-2 font-semibold">{title}</h2>
                <p className="text-body text-font-200 mb-4 max-w-[240px] text-center leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
