"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import coding from "@/public/coding.json";
import { ChevronsDown, CircleUser, Folders } from "lucide-react";

export default function HomeSection() {
    const [showTitle1, setShowTitle1] = useState(false);
    const [showTitle2, setShowTitle2] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showButton1, setShowButton1] = useState(false);
    const [showButton2, setShowButton2] = useState(false);
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
            setTimeout(() => setShowTitle1(true), 500),
            setTimeout(() => setShowTitle2(true), 900),
            setTimeout(() => setShowContent(true), 1300),
            setTimeout(() => setShowImage(true), 1500),
            setTimeout(() => setShowButton1(true), 2100),
            setTimeout(() => setShowButton2(true), 2300),
            setTimeout(() => setScrollLock(false), 2700),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="flex min-h-screen flex-col items-center gap-4 pt-24 text-black dark:text-white sm:gap-16">
            {/* 텍스트 영역 */}
            <div className="flex w-full max-w-lg flex-col items-center sm:max-w-5xl">
                <h1
                    className={`self-start pl-4 text-5xl font-black transition-all duration-700 ease-in-out md:text-8xl lg:text-9xl ${
                        showTitle1
                            ? "animate-slide-right-fade opacity-100"
                            : "opacity-0"
                    }`}
                >
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
                        FRONTEND
                    </span>
                </h1>

                <h1
                    className={`self-end pr-4 text-4xl font-black transition-all duration-700 ease-in-out md:text-7xl lg:text-8xl ${
                        showTitle2
                            ? "animate-slide-left-fade opacity-100"
                            : "opacity-0"
                    }`}
                >
                    <span>DEVELOPER</span>
                </h1>

                <p
                    className={`mt-4 text-center text-base transition-all duration-700 ease-in-out sm:text-xl md:text-2xl ${
                        showContent
                            ? "animate-slide-up opacity-100"
                            : "opacity-0"
                    }`}
                >
                    안녕하세요, <span className="font-bold">박준선</span>입니다.
                    <br />
                </p>
            </div>

            {/* 이미지 + 버튼 */}
            <div className="flex flex-col items-center gap-12 transition-all duration-1000 sm:flex-row sm:gap-24">
                {/* 이미지 */}
                <div
                    className={`flex h-48 w-48 items-center justify-center overflow-hidden rounded-3xl transition-all duration-1000 sm:h-64 sm:w-64 ${
                        showImage
                            ? "scale-110 opacity-100"
                            : "scale-90 opacity-0"
                    }`}
                >
                    <Lottie animationData={coding} loop autoplay />
                </div>
                {/* 버튼 */}
                <div className="flex flex-col items-start gap-8">
                    <button
                        onClick={() => scrollToSection("about")}
                        className={`group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-400 px-4 py-2 text-white transition-all hover:brightness-[0.8] sm:px-8 sm:py-4 ${
                            showButton1
                                ? "animate-slide-left-fade opacity-100"
                                : "opacity-0"
                        }`}
                    >
                        <CircleUser className="h-8 w-8 sm:h-10 sm:w-10" />
                        <span className="text-xl font-bold sm:text-3xl">
                            Meet the Developer
                        </span>
                    </button>

                    <button
                        onClick={() => scrollToSection("projects")}
                        className={`group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 px-4 py-2 text-white transition-all hover:brightness-[0.8] sm:px-8 sm:py-4 ${
                            showButton2
                                ? "animate-slide-left-fade opacity-100"
                                : "opacity-0"
                        }`}
                    >
                        <Folders className="h-8 w-8 sm:h-10 sm:w-10" />
                        <span className="text-xl font-bold sm:text-3xl">
                            View My Work
                        </span>
                    </button>
                </div>
            </div>

            <div
                className={`absolute bottom-10 animate-bounce ${
                    showButton2 ? "opacity-100" : "opacity-0"
                }`}
            >
                <ChevronsDown size={36} />
            </div>
        </section>
    );
}
