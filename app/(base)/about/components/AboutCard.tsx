"use client";

import Image from "next/image";

interface LandingCardProps {
    title: string;
    description: string;
    animationDelay?: string;
    iconSrc?: string;
}

export default function AboutCard({
    title,
    description,
    animationDelay = "0s",
    iconSrc,
}: LandingCardProps) {
    return (
        <div className="h-[140px] w-full max-w-[260px] animate-slide-up lg:max-w-[320px]">
            <div
                className="flex select-none flex-col items-center rounded-3xl border border-white/30 bg-white/20 px-6 py-6 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white/30 hover:shadow-2xl"
                style={{ animationDelay }}
            >
                {iconSrc && (
                    <div className="relative mb-1 h-10 w-10 flex-shrink-0 rounded-md bg-black/10 p-1">
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
        </div>
    );
}
