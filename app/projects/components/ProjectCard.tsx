// ProjectCard.tsx 파일
"use client";

import Image from "next/image";
import Badge from "./Badge";

interface ProjectCardProps {
    title: string;
    content: string;
    projectType: string;
    image?: string;
    duration: string;
    openModal: () => void;
}

export default function ProjectCard({
    title,
    content,
    projectType,
    image = "/default-image.png",
    duration,
    openModal,
}: ProjectCardProps) {
    return (
        <div
            className="group relative h-[400px] w-[350px] lg:w-[400px]"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="absolute inset-0 flex transform flex-col overflow-hidden rounded-3xl border-2 border-blue-100 bg-white shadow-md transition-transform duration-300 ease-out hover:bg-gray-100 group-hover:-translate-y-2 group-hover:shadow-lg dark:border-dark-400 dark:bg-dark-300 dark:hover:bg-dark-200">
                {/* 상단 이미지 및 뱃지 */}
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

                {/* 프로젝트명, 진행 기간, 프로젝트 설명 */}
                <div className="flex flex-1 flex-col px-4 py-2">
                    <p className="mb-2 text-2xl font-bold leading-snug text-gray-800 dark:text-white">
                        {title}
                    </p>
                    {duration && (
                        <p className="mb-3 text-sm font-medium text-gray-600 dark:text-white">
                            📅 진행 기간: {duration}
                        </p>
                    )}
                    <p className="whitespace-normal break-keep text-base leading-relaxed text-gray-700 dark:text-white">
                        {content}
                    </p>
                </div>

                {/* 자세히 보기 버튼 */}
                <div className="flex min-h-[100px] flex-[0.2] items-center justify-center">
                    <button
                        onClick={openModal}
                        className="translate-y-2 rounded-lg border-2 border-solid border-blue-400 px-6 py-4 text-lg font-medium text-blue-500 opacity-0 shadow-lg transition-all duration-300 hover:bg-blue-200 hover:text-white group-hover:translate-y-0 group-hover:opacity-100 dark:border-dark-400 dark:text-white dark:hover:bg-dark-400"
                    >
                        자세히 보기
                    </button>
                </div>
            </div>
        </div>
    );
}
