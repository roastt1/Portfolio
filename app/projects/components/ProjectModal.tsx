"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
    details: string;
    contributions: string; // 작업 기여도
    troubleshooting: string; // 트러블슈팅
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            data-aos="zoom-out"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-[90vh] w-[85vw] max-w-[1000px] flex-col rounded-2xl bg-white p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="mb-4 text-2xl font-bold">{title}</h2>

                <div className="h-[40vh] flex-shrink-0 border-t">
                    <Slider {...settings}>
                        {images.map((src, i) => (
                            <div key={i} className="relative h-[40vh]">
                                <Image
                                    src={src}
                                    alt={`${title} image ${i + 1}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* 상세 내용 영역 */}
                <div className="mt-8 flex-grow space-y-6 overflow-y-auto">
                    <section>
                        <h3 className="mb-2 border-b border-gray-300 pb-1 text-xl font-semibold">
                            프로젝트 설명
                        </h3>
                        <p className="whitespace-pre-line text-gray-700">
                            {details}
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-2 border-b border-gray-300 pb-1 text-xl font-semibold">
                            작업 기여도
                        </h3>
                        <p className="whitespace-pre-line text-gray-700">
                            {contributions}
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-2 border-b border-gray-300 pb-1 text-xl font-semibold">
                            트러블슈팅
                        </h3>
                        <p className="whitespace-pre-line text-gray-700">
                            {troubleshooting}
                        </p>
                    </section>
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 self-end rounded-lg border-2 border-red-400 px-6 py-2 text-red-800"
                >
                    닫기
                </button>
            </div>
        </div>
    );
}
