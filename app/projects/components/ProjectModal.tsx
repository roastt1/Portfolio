"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TroubleshootingItem {
    problem: string;
    cause: string;
    solution: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
    link?: string;
    details: string;
    contributions: string;
    troubleshooting: TroubleshootingItem[];
}

export default function ProjectModal({
    isOpen,
    onClose,
    title,
    images,
    link,
    details,
    contributions,
    troubleshooting,
}: ProjectModalProps) {
    const [previewIndex, setPreviewIndex] = useState<number | null>(null);

    const handleNext = () => {
        if (previewIndex === null) return;
        setPreviewIndex((prev) =>
            prev === images.length - 1 ? 0 : (prev ?? 0) + 1
        );
    };

    const handlePrev = () => {
        if (previewIndex === null) return;
        setPreviewIndex((prev) =>
            prev === 0 ? images.length - 1 : (prev ?? 0) - 1
        );
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            data-aos="zoom-out"
            onClick={previewIndex !== null ? undefined : onClose}
        >
            <div
                className="relative flex max-h-[90vh] w-[90vw] max-w-[1100px] flex-col rounded-3xl bg-white p-5 shadow-2xl dark:bg-dark-100 dark:text-white sm:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 헤더 영역 */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                        <h2 className="ml-2 text-xl font-black tracking-tight sm:text-2xl">
                            {title}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-xl bg-gray-100 p-2 text-gray-500 transition-all hover:bg-gray-200 hover:text-black dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="custom-scroll mt-6 flex-grow overflow-y-auto pr-2">
                    {/* 이미지 영역 */}
                    <section className="mb-10">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold">
                                📸 Project Gallery
                            </h3>
                            <span className="text-xs text-gray-400">
                                {images.length} images available
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                            {images.map((src, i) => (
                                <div
                                    key={i}
                                    className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/5"
                                    onClick={() => setPreviewIndex(i)}
                                >
                                    <Image
                                        src={src}
                                        alt={`${title} preview ${i}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/40">
                                        <Maximize2
                                            className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                                            size={24}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 프로젝트 정보 및 링크 */}
                    <div className="grid gap-10 lg:grid-cols-[1fr_350px]">
                        <div className="space-y-12">
                            {/* 소개 */}
                            <section>
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="h-6 w-1 rounded-full bg-blue-500" />
                                    <h3 className="text-lg font-bold">
                                        프로젝트 소개
                                    </h3>
                                </div>
                                <p className="whitespace-pre-line text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                    {details}
                                </p>
                            </section>

                            {/* 트러블슈팅 섹션 */}
                            <section>
                                <div className="mb-6 flex items-center gap-2">
                                    <div className="h-6 w-1 rounded-full bg-red-500" />
                                    <h3 className="text-lg font-bold">
                                        트러블슈팅
                                    </h3>
                                </div>
                                <div className="space-y-8">
                                    {troubleshooting.map((item, i) => (
                                        <div
                                            key={i}
                                            className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/5 dark:bg-white/[0.02]"
                                        >
                                            {/* 문제점 */}
                                            <div className="mb-4">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <span className="rounded-md bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                                                        PROBLEM
                                                    </span>
                                                    <div className="h-[1px] flex-grow bg-red-200 dark:bg-red-500/30" />
                                                </div>
                                                <p className="text-[15px] font-bold leading-relaxed text-gray-800 dark:text-gray-100">
                                                    {item.problem}
                                                </p>
                                            </div>

                                            {/* 원인 */}
                                            <div className="relative mb-5 ml-2 border-l-2 border-dashed border-amber-300 pl-5 dark:border-amber-500/40">
                                                <div className="mb-1 flex items-center gap-2">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                                                        Cause
                                                    </span>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                    {item.cause}
                                                </p>
                                            </div>

                                            {/* 해결 */}
                                            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 dark:border-emerald-500/10 dark:bg-emerald-500/5">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-3 w-3"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[11px] font-bold uppercase tracking-tight text-emerald-700 dark:text-emerald-400">
                                                        Solution
                                                    </span>
                                                </div>
                                                <p className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300">
                                                    {item.solution}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* 링크 및 기여도 */}
                        <div className="space-y-8">
                            <section className="rounded-2xl bg-blue-50 p-6 dark:bg-blue-500/10">
                                <h3 className="mb-4 text-sm font-bold text-blue-600 dark:text-blue-400">
                                    🔗 Link
                                </h3>
                                {link ? (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block truncate text-sm font-medium underline"
                                    >
                                        {link.replace(/^https?:\/\//, "")}
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-400">
                                        링크가 없습니다.
                                    </span>
                                )}
                            </section>

                            <section>
                                <h3 className="mb-4 text-sm font-bold text-black dark:text-gray-200">
                                    🧩 Contributions
                                </h3>
                                <div className="space-y-2">
                                    {contributions
                                        .split("\n")
                                        .filter((l) => l.trim())
                                        .map((line, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                                            >
                                                <span className="mt-1 text-blue-500">
                                                    •
                                                </span>
                                                <span>
                                                    {line
                                                        .replace(/^- /, "")
                                                        .trim()}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* 확대 프리뷰 모달 (Full Screen) */}
            <AnimatePresence>
                {previewIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
                        onClick={() => setPreviewIndex(null)}
                    >
                        {/* 상단 우측 닫기 버튼 (원래 자리) */}
                        <button
                            onClick={() => setPreviewIndex(null)}
                            className="absolute right-6 top-6 z-[220] rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 active:scale-90"
                            aria-label="Close"
                        >
                            <X size={28} />
                        </button>

                        {/* 이미지 슬라이드 영역 */}
                        <div
                            className="relative flex h-full w-full items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 데스크톱 화살표 버튼 (유지) */}
                            <button
                                className="absolute left-8 z-[220] hidden rounded-full bg-white/5 p-4 text-white hover:bg-white/10 sm:block"
                                onClick={handlePrev}
                            >
                                <ChevronLeft size={40} />
                            </button>

                            {/* 메인 이미지 (스와이프 기능 유지) */}
                            <motion.div
                                key={previewIndex}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, info) => {
                                    const swipeThreshold = 50;
                                    if (info.offset.x < -swipeThreshold)
                                        handleNext();
                                    else if (info.offset.x > swipeThreshold)
                                        handlePrev();
                                }}
                                className="relative flex h-[75vh] w-full cursor-grab active:cursor-grabbing sm:w-[80vw]"
                            >
                                <Image
                                    src={images[previewIndex]}
                                    alt="Preview"
                                    fill
                                    className="pointer-events-none object-contain"
                                    priority
                                />
                            </motion.div>

                            <button
                                className="absolute right-8 z-[220] hidden rounded-full bg-white/5 p-4 text-white hover:bg-white/10 sm:block"
                                onClick={handleNext}
                            >
                                <ChevronRight size={40} />
                            </button>
                        </div>

                        {/* 하단 중앙 인디케이터 (원래 자리) */}
                        <div className="absolute bottom-10 left-1/2 z-[220] -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
                            <span className="font-bold text-blue-400">
                                {previewIndex + 1}
                            </span>
                            <span className="mx-2 opacity-30">/</span>
                            <span className="opacity-70">{images.length}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
