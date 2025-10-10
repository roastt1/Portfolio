"use client";
import Slider from "react-slick";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
    details: string;
    contributions: string;
    troubleshooting: string;
}

export default function ProjectModal({
    isOpen,
    onClose,
    title,
    images,
    details,
    contributions,
    troubleshooting,
}: ProjectModalProps) {
    const [previewIndex, setPreviewIndex] = useState<number | null>(null);
    // 마우스 드래그 시작 좌표
    const dragStart = useRef<{ x: number } | null>(null);
    // 마우스를 누를 때 시작 좌표 기록
    const handleImgMouseDown = (e: React.MouseEvent) => {
        dragStart.current = { x: e.clientX };
    };
    // 마우스를 뗄 때 이동 거리를 계산해서 드래그인지 클릭인지 판별
    const handleImgMouseUp = (e: React.MouseEvent, i: number) => {
        if (!dragStart.current) return;
        const dx = Math.abs(e.clientX - dragStart.current.x);
        if (dx < 5) {
            setPreviewIndex(i);
        }
        dragStart.current = null;
    };

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
            data-aos="zoom-out"
            onClick={previewIndex !== null ? undefined : onClose}
        >
            <div
                className="relative flex max-h-[90vh] w-[85vw] max-w-[1000px] flex-col rounded-2xl bg-white p-6 shadow-2xl dark:bg-dark-300 dark:text-white"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 제목, 닫기 */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-dark-400">
                    <h2 className="text-2xl font-bold">[ {title} ]</h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-gray-500 transition hover:bg-gray-200 hover:text-black dark:hover:bg-dark-400"
                    >
                        <X className="h-6 w-6 dark:text-white" />
                    </button>
                </div>

                {/* 이미지 캐러셀 */}
                <div className="mt-4 h-[30vh] flex-shrink-0 rounded-xl border border-gray-200 bg-gray-300 px-12 dark:border-dark-400 dark:bg-dark-200">
                    <Slider {...settings}>
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className="relative flex h-[30vh] cursor-pointer items-center justify-center"
                                onMouseDown={handleImgMouseDown}
                                onMouseUp={(e) => handleImgMouseUp(e, i)}
                            >
                                <Image
                                    src={src}
                                    alt={`${title} image ${i + 1}`}
                                    fill
                                    style={{
                                        objectFit: "contain",
                                        padding: "14px",
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* 상세 내용 영역 */}
                <div className="custom-scroll mt-8 flex-grow space-y-6 overflow-y-auto pr-2">
                    <section>
                        <h3 className="mb-2 border-l-4 border-blue-500 pl-2 text-xl font-semibold dark:border-blue-400">
                            📁 프로젝트 설명
                        </h3>
                        <p className="whitespace-pre-line leading-relaxed dark:text-white">
                            {details}
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-2 border-l-4 border-green-500 pl-2 text-xl font-semibold dark:border-green-400">
                            🧩 작업 기여도
                        </h3>
                        <p className="whitespace-pre-line leading-relaxed dark:text-white">
                            {contributions}
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-2 border-l-4 border-red-500 pl-2 text-xl font-semibold dark:border-red-400">
                            🧠 트러블슈팅
                        </h3>
                        <p className="whitespace-pre-line leading-relaxed dark:text-white">
                            {troubleshooting}
                        </p>
                    </section>
                </div>
            </div>

            {/* 이미지 확대 */}
            {previewIndex !== null && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90"
                    onClick={() => setPreviewIndex(null)}
                >
                    <div
                        className="relative flex h-[90vh] w-full items-center justify-center rounded-xl bg-black/90 sm:h-[80vh] sm:w-[80vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[previewIndex]}
                            alt="preview"
                            width={1200}
                            height={800}
                            className="max-h-[70vh] object-contain transition-all duration-300"
                        />

                        {/* 닫기 버튼 */}
                        <button
                            onClick={() => setPreviewIndex(null)}
                            className="absolute right-4 top-4 rounded-full bg-dark-200 p-2 text-white hover:bg-gray-800"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* 좌우 이동 버튼 */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-dark-200 p-3 text-white hover:bg-gray-800"
                        >
                            <ChevronLeft className="h-4 w-4 sm:h-8 sm:w-8" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-dark-200 p-3 text-white hover:bg-gray-800"
                        >
                            <ChevronRight className="h-4 w-4 sm:h-8 sm:w-8" />
                        </button>

                        <div className="absolute bottom-2 text-base text-white">
                            {previewIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
