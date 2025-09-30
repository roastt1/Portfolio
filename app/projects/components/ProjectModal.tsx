"use client";
import Slider from "react-slick";
import Image from "next/image";
import { X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            onClick={onClose}
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
                            <div key={i} className="relative h-[30vh]">
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
        </div>
    );
}
