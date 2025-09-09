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
        <div
            className="h-[180px] w-full max-w-[280px] animate-slide-up lg:max-w-[340px]"
            style={{ animationDelay }}
        >
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-blue-100 bg-white/90 px-6 py-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                {/* 아이콘 */}
                {iconSrc && (
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-200 shadow-lg">
                        <Image
                            src={iconSrc}
                            alt="아이콘"
                            width={32}
                            height={32}
                            style={{
                                objectFit: "contain",
                                filter: "invert(1) brightness(1.8)",
                            }}
                        />
                    </div>
                )}

                {/* 텍스트 */}
                <h2 className="mb-2 text-lg font-semibold text-gray-800 lg:text-xl">
                    {title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}
