"use client";

import Image from "next/image";

interface ProjectCardProps {
    title: string;
    content: string;
    image?: string;
    animationDelay?: string;
    openModal: () => void;
}

export default function ProjectCard({
    title,
    content,
    image = "/default-image.png",
    animationDelay = "0s",
    openModal,
}: ProjectCardProps) {
    return (
        <div
            className="group relative flex h-[500px] w-[320px] animate-slide-up flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg lg:h-[600px] lg:w-[480px]"
            style={{ animationDelay }}
        >
            <div className="relative flex-[0.5] border-b border-gray-200">
                <Image src={image} alt="이미지없음" fill />
            </div>

            <div className="flex h-20 flex-[0.3] flex-col items-center justify-center px-4 py-2">
                <p className="text-center text-base font-semibold text-gray-800">
                    {title}
                </p>
                <p className="mt-2 whitespace-normal break-keep text-center text-sm text-gray-600">
                    {content}
                </p>
            </div>

            <div className="flex flex-[0.2] items-center justify-center">
                <button
                    onClick={openModal}
                    className="translate-y-2 rounded-lg border-2 border-solid px-6 py-2 text-sm font-medium opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    자세히보기
                </button>
            </div>
        </div>
    );
}
