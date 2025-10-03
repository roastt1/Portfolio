"use client";
import Slider from "react-slick";
import Image from "next/image";
import { X } from "lucide-react";
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
    const [previewImg, setPreviewImg] = useState<string | null>(null);
    // 마우스 드래그 시작 좌표
    const dragStart = useRef<{ x: number } | null>(null);
    // 마우스를 누를 때 시작 좌표 기록
    const handleImgMouseDown = (e: React.MouseEvent) => {
        dragStart.current = { x: e.clientX };
    };
    // 마우스를 뗄 때 이동 거리를 계산해서 드래그인지 클릭인지 판별
    const handleImgMouseUp = (e: React.MouseEvent, src: string) => {
        if (!dragStart.current) return;
        const dx = Math.abs(e.clientX - dragStart.current.x);
        if (dx < 5) {
            setPreviewImg(src);
        }
        dragStart.current = null;
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
            onClick={previewImg ? undefined : onClose}
        >
            <div
                className="relative flex max-h-[90vh] w-[85vw] max-w-[1000px] flex-col rounded-2xl bg-white p-6 shadow-2xl dark:bg-dark-300/95 dark:text-white"
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
                <div className="mt-4 h-[30vh] flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-dark-400">
                    <Slider {...settings}>
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className="relative flex h-[30vh] cursor-pointer items-center justify-center"
                                onMouseDown={handleImgMouseDown}
                                onMouseUp={(e) => handleImgMouseUp(e, src)}
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
                <div className="custom-scroll mt-6 flex-grow space-y-6 overflow-y-auto pr-2">
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
            {previewImg && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90"
                    onClick={() => setPreviewImg(null)}
                >
                    <div
                        className="relative flex h-[75vh] w-[95vw] items-center justify-center rounded-xl bg-black/90 sm:h-[80vh] sm:w-[80vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={previewImg}
                            alt="preview"
                            width={1200}
                            height={800}
                            className="max-h-[70vh] object-contain"
                        />
                        <button
                            onClick={() => setPreviewImg(null)}
                            className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
