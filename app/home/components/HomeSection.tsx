"use client";

import { useEffect, useState } from "react";
import {
    BookText,
    ChevronDown,
    CircleUser,
    Folders,
    Sparkles,
} from "lucide-react";
import { HomeSectionButton } from "./HomeSectionButton";
import { CodeTerminal } from "./CodeTerminal";

export const HOMESECTION_BUTTONS = [
    {
        id: "about",
        label: "Meet the Developer",
        icon: CircleUser,
        color: "from-violet-500 to-pink-400",
    },
    {
        id: "skills",
        label: "View My Skills",
        icon: BookText,
        color: "from-indigo-500 to-blue-400",
    },
    {
        id: "projects",
        label: "My Work",
        icon: Folders,
        color: "from-blue-400 to-cyan-400",
    },
];
export default function HomeSection() {
    const [step, setStep] = useState(0);
    const [scrollLock, setScrollLock] = useState(true);

    useEffect(() => {
        const timeouts = [
            setTimeout(() => setStep(1), 400),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1200),
            setTimeout(() => setStep(4), 1400),
            setTimeout(() => setStep(5), 1800),
            setTimeout(() => setStep(6), 2000),
            setTimeout(() => setStep(7), 2200),
            setTimeout(() => {
                setStep(8);
                setScrollLock(false);
            }, 2600),
        ];
        return () => timeouts.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        document.body.style.overflow = scrollLock ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [scrollLock]);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-black dark:text-white"
        >
            {/* 텍스트 영역 */}
            <div className="z-10 flex w-full max-w-lg flex-col items-center sm:max-w-5xl">
                <div
                    className={`mb-4 flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/50 px-3 py-1 backdrop-blur-sm transition-all duration-1000 dark:border-blue-900/30 dark:bg-dark-100/50 sm:mb-6 sm:px-4 sm:py-1.5 ${step >= 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                    <Sparkles
                        size={12}
                        className="animate-pulse text-blue-600 dark:text-white sm:size-[14px]"
                    />
                    <span className="text-[8px] font-black tracking-[0.2em] text-blue-600 dark:text-white sm:text-sm">
                        AVAILIABLE FOR PROJECTS
                    </span>
                </div>

                <h1
                    className={`self-start text-5xl font-black leading-none transition-all duration-1000 ease-out sm:text-9xl ${step >= 1 ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
                >
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        FRONTEND
                    </span>
                </h1>

                <h1
                    className={`self-end text-4xl font-black leading-none transition-all duration-1000 ease-out sm:text-8xl ${step >= 2 ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
                >
                    DEVELOPER
                </h1>
                <div
                    className={`mt-8 text-center font-mono transition-all duration-1000 ${step >= 3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <span className="text-gray-500 dark:text-gray-400">
                        {`// 사용자의 경험을 코드로 설계하는`}
                    </span>
                    <h2 className="mt-2 text-xl font-bold sm:text-3xl">
                        <span className="text-blue-500">class</span>{" "}
                        JoonSeonPark{" "}
                        <span className="text-purple-500">implements</span>{" "}
                        Developer {"{ ... }"}
                    </h2>
                </div>
            </div>

            {/* 메인 콘텐츠 영역 */}
            <div className="z-10 mt-8 flex w-full max-w-6xl flex-col items-center justify-center gap-10 sm:flex-row">
                {/* 코드 터미널 */}
                <CodeTerminal step={step} />
                {/* 버튼 그룹  */}
                <div className="flex w-full max-w-[420px] flex-col gap-4">
                    {HOMESECTION_BUTTONS.map((btn, idx) => (
                        <HomeSectionButton
                            key={btn.id}
                            label={btn.label}
                            icon={btn.icon}
                            color={btn.color}
                            index={idx}
                            step={step}
                            onClick={() => scrollToSection(btn.id)}
                        />
                    ))}
                </div>
            </div>

            {/* 하단 스크롤 인디케이터 */}
            <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700 ${step >= 7 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
                <div className="flex flex-col items-center gap-1">
                    <ChevronDown className="h-6 w-6 animate-bounce text-blue-500 sm:h-7 sm:w-7" />
                    <span className="text-[10px] font-bold tracking-widest text-gray-400">
                        SCROLL
                    </span>
                </div>
            </div>
        </section>
    );
}
