"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import coding from "@/public/coding.json";
import { ChevronsDown, CircleUser, Folders, Layers } from "lucide-react";

export default function Home() {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [moveTextsUp, setMoveTextsUp] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const timers = [
            setTimeout(() => setShowFirst(true), 800), // 첫번째 텍스트 등장
            setTimeout(() => setShowSecond(true), 1200), // 두번째 텍스트 등장
            setTimeout(() => setMoveTextsUp(true), 2000), // 텍스트들 위로 이동
            setTimeout(() => setShowImage(true), 2700), // 이미지 등장
            setTimeout(() => setShowMain(true), 3200), // 메인 콘텐츠 등장
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center px-4 text-black">
            {/* 텍스트 영역 */}
            <div
                className={`flex flex-col items-center space-y-4 transition-transform duration-1000 ease-in-out ${
                    moveTextsUp ? "-translate-y-48" : "translate-y-0"
                }`}
            >
                <h1
                    className={`text-7xl font-bold transition-all duration-700 ease-in-out lg:text-8xl ${
                        showFirst
                            ? "translate-y-[280px] scale-110 opacity-100"
                            : "translate-y-[320px] scale-90 opacity-0"
                    }`}
                >
                    FrontEnd
                </h1>

                <p
                    className={`text-lg transition-all duration-700 ease-in-out lg:text-xl ${
                        showSecond
                            ? "translate-y-[280px] scale-110 opacity-100"
                            : "translate-y-[320px] scale-90 opacity-0"
                    }`}
                >
                    프론트엔드 개발자 박준선입니다.
                </p>
            </div>

            {/* 이미지 영역 */}
            <div
                className={`flex h-64 w-64 overflow-hidden rounded-3xl transition-all duration-1000 ${
                    showImage
                        ? "translate-y-[120px] scale-110 opacity-100"
                        : "translate-y-[120px] scale-90 opacity-0"
                }`}
            >
                <Lottie animationData={coding} loop={true} autoplay={true} />
            </div>

            {/* 메인 콘텐츠 */}
            <div
                className={`mt-16 transition-all duration-1000 ease-in-out ${
                    showMain
                        ? "translate-y-[100px] opacity-100"
                        : "translate-y-[100px] opacity-0"
                }`}
            >
                <div className="mx-auto my-4 w-fit animate-bounce">
                    <ChevronsDown size={32} />
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link
                        href="/about"
                        className="flex w-28 flex-col items-center justify-center text-xl sm:w-32 md:w-36"
                    >
                        <CircleUser size={64} />
                        <span className="mt-2 text-center">About me</span>
                    </Link>
                    <Link
                        href="/skills"
                        className="flex w-28 flex-col items-center justify-center text-xl sm:w-32 md:w-36"
                    >
                        <Layers size={64} />
                        <span className="mt-2 text-center">Skills</span>
                    </Link>
                    <Link
                        href="/projects"
                        className="flex w-28 flex-col items-center justify-center text-xl sm:w-32 md:w-36"
                    >
                        <Folders size={64} />
                        <span className="mt-2 text-center">Projects</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
