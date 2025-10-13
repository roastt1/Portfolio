"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import coding from "@/public/coding.json";
import { ChevronsDown, CircleUser, Folders } from "lucide-react";

export default function HomeSection() {
    const [showTitle, setShowTitle] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showMain, setShowMain] = useState(false);
    const [scrollLock, setScrollLock] = useState(true);

    useEffect(() => {
        if (scrollLock) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [scrollLock]);

    useEffect(() => {
        const timers = [
            setTimeout(() => setShowTitle(true), 500),
            setTimeout(() => setShowContent(true), 800),
            setTimeout(() => setShowImage(true), 1500),
            setTimeout(() => setShowMain(true), 2000),
            setTimeout(() => setScrollLock(false), 2500), // 마지막에 스크롤 허용
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    // 섹션 이동 함수
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center pt-24 text-black dark:text-white">
            {/* 텍스트 영역 */}
            <div className="flex flex-col items-center transition-transform">
                <h1
                    className={`text-center text-5xl font-black transition-all duration-700 ease-in-out sm:text-8xl ${
                        showTitle
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-0"
                    }`}
                >
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
                        FRONTEND
                    </span>
                    <br />
                    <span className="text-black dark:text-white">
                        DEVELOPER
                    </span>
                </h1>

                <p
                    className={`py-8 text-center text-lg transition-all duration-700 ease-in-out sm:text-2xl ${
                        showContent
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-0"
                    }`}
                >
                    안녕하세요, <span className="font-bold">박준선</span>입니다.
                    <br />
                </p>
            </div>

            {/* 이미지 영역 */}
            <div
                className={`mb-24 flex h-64 w-64 overflow-hidden rounded-3xl transition-all duration-1000 ${
                    showImage ? "scale-110 opacity-100" : "scale-90 opacity-0"
                }`}
            >
                <Lottie animationData={coding} loop={true} autoplay={true} />
            </div>

            {/* 메인 콘텐츠 */}
            <div
                className={`transition-all duration-1000 ease-in-out ${
                    showMain ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="flex justify-center gap-16">
                    <button
                        type="button"
                        onClick={() => scrollToSection("about")}
                        className="flex w-28 animate-pulse flex-col items-center justify-center bg-transparent text-lg font-bold sm:w-32 md:w-36"
                    >
                        <CircleUser size={48} />
                        <span className="mt-2 text-center">더 알아보기</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToSection("projects")}
                        className="flex w-28 animate-pulse flex-col items-center justify-center bg-transparent text-xl font-bold sm:w-32 md:w-36"
                    >
                        <Folders size={48} />
                        <span className="mt-2 text-center">프로젝트</span>
                    </button>
                </div>

                <div className="mx-auto w-fit animate-bounce pt-8">
                    <ChevronsDown size={32} />
                </div>
            </div>
        </div>
    );
}
