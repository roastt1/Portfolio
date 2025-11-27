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
            className="group relative h-[450px] w-[350px] lg:w-[400px]"
            data-aos="fade-up"
            data-aos-duration="600"
        >
            <div className="relative flex h-full transform flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl dark:border-dark-400 dark:bg-gradient-to-br dark:from-dark-300 dark:to-dark-400">
                {/* 상단 이미지 및 뱃지 */}
                <div className="relative flex items-start gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-dark-100 dark:to-dark-300">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-indigo-200/30 to-purple-200/40 dark:from-indigo-500/20 dark:to-purple-500/25"></div>
                    {/* 호버 시 강조 효과 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 blur transition duration-500 group-hover:opacity-50 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-200 dark:group-hover:opacity-35"></div>
                    {/* 이미지 */}
                    <div className="relative z-10 h-28 w-28 overflow-hidden rounded-2xl shadow-lg ring-2 ring-white/50 transition-all duration-300">
                        <Image
                            src={image}
                            alt="프로젝트 이미지"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    <div className="relative z-10 flex-1">
                        <Badge text={projectType} projectType={projectType} />
                    </div>
                </div>

                {/* 프로젝트명, 진행 기간, 프로젝트 설명 */}
                <div className="flex flex-1 flex-col gap-3 px-6 py-5">
                    <h3 className="text-2xl font-bold">{title}</h3>

                    {duration && (
                        <div className="flex items-center gap-2">
                            <span className="text-lg">📅</span>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {duration}
                            </p>
                        </div>
                    )}

                    <p className="whitespace-normal break-keep text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        {content}
                    </p>
                </div>

                {/* 자세히 보기 버튼 */}
                <div className="flex items-center justify-center p-6">
                    <button
                        onClick={openModal}
                        className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-400 to-purple-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-indigo-500 hover:to-purple-600 hover:shadow-xl dark:from-indigo-400 dark:to-purple-500 dark:hover:from-indigo-500 dark:hover:to-purple-600"
                    >
                        <span className="relative z-10">자세히 보기 →</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
