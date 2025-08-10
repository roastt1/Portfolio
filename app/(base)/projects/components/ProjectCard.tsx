"use client";

import Image from "next/image";
import Badge from "./Badge";

interface ProjectCardProps {
    title: string;
    content: string;
    projectType: string;
    image?: string;
    animationDelay?: string;
    openModal: () => void;
}

export default function ProjectCard({
    title,
    content,
    projectType,
    image = "/default-image.png",
    animationDelay = "0s",
    openModal,
}: ProjectCardProps) {
    return (
        <div
            className="group relative flex h-[500px] w-[350px] w-full select-none flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-xl lg:w-[400px]"
            style={{ animationDelay }}
        >
            <div className="relative min-h-[250px] flex-[0.5] border-b border-gray-200">
                <Image
                    src={image}
                    alt="이미지없음"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            <div className="flex min-h-[150px] flex-[0.3] flex-col items-center justify-center gap-8 px-4 py-2">
                <Badge text={projectType} projectType={projectType} />
                <div>
                    <p className="text-center text-base font-semibold text-gray-800">
                        {title}
                    </p>
                    <p className="mt-2 whitespace-normal break-keep text-center text-sm text-gray-600">
                        {content}
                    </p>
                </div>
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
