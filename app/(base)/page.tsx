"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronsDown, CircleUser } from "lucide-react";

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
                    className={`text-6xl font-bold transition-all duration-700 ease-in-out ${
                        showFirst
                            ? "translate-y-[280px] opacity-100"
                            : "translate-y-[320px] opacity-0"
                    }`}
                >
                    FrontEnd
                </h1>

                <p
                    className={`text-xl transition-all duration-700 ease-in-out ${
                        showSecond
                            ? "translate-y-[280px] opacity-100"
                            : "translate-y-[320px] opacity-0"
                    }`}
                >
                    프론트엔드 개발자 박준선입니다.
                </p>
            </div>

            {/* 이미지 영역 */}
            <div
                className={`flex h-48 w-48 overflow-hidden rounded-3xl transition-all duration-1000 ${
                    showImage
                        ? "translate-y-[120px] opacity-100"
                        : "translate-y-[120px] opacity-0"
                }`}
            >
                <Image
                    src="/images/landing-image.png"
                    alt="Profile"
                    width={1000}
                    height={1000}
                    className="object-cover"
                />
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
                <div className="flex flex-col items-center space-y-2">
                    <Link href="/about" className="animate-pulse text-xl">
                        <CircleUser size={64} />
                    </Link>
                    <Link href="/about" className="animate-pulse text-xl">
                        About Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
