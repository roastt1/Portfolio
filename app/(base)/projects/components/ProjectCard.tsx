"use client";

import Image from "next/image";
import Badge from "./Badge";

interface ProjectCardProps {
    title: string;
    content: string;
    projectType: string;
    image?: string;
    duration: string;
    animationDelay?: string;
    openModal: () => void;
}

export default function ProjectCard({
    title,
    content,
    projectType,
    image = "/default-image.png",
    duration,
    animationDelay = "0s",
    openModal,
}: ProjectCardProps) {
    return (
        <div
            className="group relative flex h-[500px] w-[350px] transform animate-slide-up select-none flex-col overflow-hidden rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:w-[400px]"
            style={{ animationDelay }}
        >
            <div className="flex items-start p-4">
                <div className="relative mr-4 h-32 w-32 overflow-hidden rounded-lg border p-16">
                    <Image
                        src={image}
                        alt="로고 이미지"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <Badge text={projectType} projectType={projectType} />
            </div>

            <div className="flex flex-1 flex-col px-4 py-2">
                <p className="mb-2 text-2xl font-bold leading-snug text-gray-800">
                    {title}
                </p>
                <p className="mb-3 text-sm font-medium text-gray-600">
                    📅 진행 기간: {duration}
                </p>
                <p className="whitespace-normal break-keep text-base leading-relaxed text-gray-700">
                    {content}
                </p>
            </div>

            <div className="flex min-h-[100px] flex-[0.2] items-center justify-center">
                <button
                    onClick={openModal}
                    className="translate-y-2 rounded-lg border-2 border-solid px-6 py-4 text-lg font-medium opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    자세히 보기
                </button>
            </div>
        </div>
    );
}
