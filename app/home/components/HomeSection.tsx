"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import coding from "@/public/coding.json";
import Image from "next/image";
import { ChevronsDown, CircleUser, Folders } from "lucide-react";

export default function HomeSection() {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [moveTextsUp, setMoveTextsUp] = useState(false);
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
            setTimeout(() => setShowFirst(true), 500),
            setTimeout(() => setShowSecond(true), 800),
            setTimeout(() => setMoveTextsUp(true), 1500),
            setTimeout(() => setShowImage(true), 2200),
            setTimeout(() => setShowMain(true), 2800),
            setTimeout(() => setScrollLock(false), 3500), // 마지막에 스크롤 허용
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
        <section
            id="home"
            className="relative flex flex-col items-center justify-center px-4 text-black dark:text-white"
        >
            {/* 텍스트 영역 */}
            <div
                className={`flex flex-col items-center space-y-4 transition-transform duration-1000 ease-in-out ${
                    moveTextsUp ? "-translate-y-24" : "translate-y-0"
                }`}
            >
                <h1
                    className={`text-7xl font-bold text-purple-300 transition-all duration-700 ease-in-out lg:text-8xl ${
                        showFirst
                            ? "translate-y-[280px] scale-100 opacity-100"
                            : "translate-y-[320px] scale-90 opacity-0"
                    }`}
                >
                    <Image
                        src="/images/FrontEnd.png"
                        alt="Profile Picture"
                        width={500}
                        height={500}
                    />
                </h1>

                <p
                    className={`text-xl transition-all duration-700 ease-in-out lg:text-2xl ${
                        showSecond
                            ? "translate-y-[280px] scale-100 opacity-100"
                            : "translate-y-[320px] scale-90 opacity-0"
                    }`}
                >
                    프론트엔드 개발자 <span className="font-bold">박준선</span>
                    입니다.
                </p>
            </div>

            {/* 이미지 영역 */}
            <div
                className={`mb-24 flex h-64 w-64 overflow-hidden rounded-3xl transition-all duration-1000 ${
                    showImage
                        ? "translate-y-[200px] scale-110 opacity-100"
                        : "translate-y-[120px] scale-90 opacity-0"
                }`}
            >
                <Lottie animationData={coding} loop={true} autoplay={true} />
            </div>

            {/* 메인 콘텐츠 */}
            <div
                className={`transition-all duration-1000 ease-in-out ${
                    showMain
                        ? "translate-y-[180px] opacity-100"
                        : "translate-y-[150px] opacity-0"
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

                <div className="mx-auto my-16 w-fit animate-bounce">
                    <ChevronsDown size={32} />
                </div>
            </div>
        </section>
    );
}
