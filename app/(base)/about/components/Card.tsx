"use client";

import Image from "next/image";

interface LandingCardProps {
    title: string;
    description: string;
    animationDelay?: string;
    iconSrc?: string; // SVG 경로
}

export default function Card({
    title,
    description,
    animationDelay = "0s",
    iconSrc,
}: LandingCardProps) {
    return (
        <div
            className="flex h-[140px] w-full max-w-[260px] transform animate-slide-left-fade flex-row items-center rounded-xl border border-gray-400 bg-gray-50 px-6 py-6 text-left shadow-sm transition-all duration-300 ease-out hover:bg-gray-200 hover:shadow-md sm:h-[160px] sm:max-w-[280px] md:h-[180px] md:max-w-[300px] lg:max-w-[320px]"
            style={{ animationDelay }}
        >
            {/* 왼쪽 아이콘 */}
            {iconSrc && (
                <div className="relative mr-4 h-10 w-10 flex-shrink-0">
                    <Image
                        src={iconSrc}
                        alt="x"
                        fill
                        sizes="40px"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            )}

            {/* 오른쪽 텍스트 */}
            <div className="flex flex-col">
                <h2 className="mb-1 text-base font-semibold sm:text-lg md:text-xl">
                    {title}
                </h2>
                <p className="text-font-200 max-w-full break-words text-xs leading-relaxed sm:text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}
