"use client";

import Image from "next/image";
import Badge from "./Badge";
import { Calendar } from "lucide-react";

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
            className="group relative h-[460px] w-full max-w-[380px] lg:max-w-[400px]"
            data-aos="fade-up"
            data-aos-duration="600"
        >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl dark:border-white/5 dark:bg-dark-100/50">
                {/* 상단 이미지 및 뱃지 */}
                <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-indigo-50 dark:from-gray-900 dark:to-dark-100">
                    <div className="relative flex h-full items-center justify-between px-6">
                        {/* 이미지 */}
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-300 transition-transform duration-300 group-hover:scale-110 dark:bg-dark-200 dark:ring-white/10">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <Badge
                                text={projectType}
                                projectType={projectType}
                            />
                        </div>
                    </div>
                </div>

                {/* 프로젝트명, 진행 기간, 프로젝트 설명 */}
                <div className="flex flex-1 flex-col px-7 py-6">
                    <div className="mb-auto space-y-3">
                        <h3 className="text-xl font-[800] tracking-tight text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                            {title}
                        </h3>

                        {duration && (
                            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-400">
                                <Calendar className="h-3.5 w-3.5" />
                                <p className="text-[13px] font-medium tracking-wide">
                                    {duration}
                                </p>
                            </div>
                        )}

                        <p className="line-clamp-3 text-[14px] leading-relaxed text-gray-500 dark:text-gray-300">
                            {content}
                        </p>
                    </div>

                    {/* 자세히 보기 버튼 */}
                    <div className="mt-6">
                        <button
                            onClick={openModal}
                            className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-600 dark:bg-white dark:text-black dark:hover:bg-indigo-500 dark:hover:text-white"
                        >
                            <span>자세히 보기</span>
                            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                →
                            </span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
