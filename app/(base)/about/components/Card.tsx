"use client";

import Image from "next/image";

interface LandingCardProps {
    title: string;
    description: string;
    animationDelay?: string;
    iconSrc?: string;
}

export default function Card({
    title,
    description,
    animationDelay = "0s",
    iconSrc,
}: LandingCardProps) {
    return (
        <div
            className="flex h-[140px] w-full min-w-[300px] max-w-[260px] animate-slide-left-fade flex-row items-center rounded-xl border border-white/30 bg-white/20 px-6 py-6 text-left shadow-md backdrop-blur-md transition-all duration-300 ease-out hover:bg-white/30 hover:shadow-2xl sm:h-[160px] sm:max-w-[280px] lg:max-w-[320px]"
            style={{ animationDelay }}
        >
            {iconSrc && (
                <div className="relative mr-4 h-10 w-10 flex-shrink-0 rounded-md bg-black/10 p-1">
                    <Image
                        src={iconSrc}
                        alt="아이콘"
                        fill
                        sizes="40px"
                        style={{
                            objectFit: "contain",
                            filter: "invert(1) brightness(1.8)",
                        }}
                    />
                </div>
            )}
            <div className="flex flex-col">
                <h2 className="mb-1 text-base font-semibold text-white sm:text-lg">
                    {title}
                </h2>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}
