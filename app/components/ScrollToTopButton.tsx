"use client";

import { useState, useEffect } from "react";
import { ChevronsUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [phase, setPhase] = useState<"idle" | "flyOut" | "flyIn">("idle");
    const [isVisible, setIsVisible] = useState(false);

    // 스크롤이 어느 정도 내려왔을 때만 버튼 표시
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleClick = () => {
        // 애니메이션 중엔 재시작하지 않음
        if (phase !== "idle") return;
        scrollToTop();
        setPhase("flyOut");
    };

    const togglePhase = () => {
        if (phase === "flyOut") {
            setPhase("flyIn");
        } else if (phase === "flyIn") {
            setPhase("idle");
        }
    };

    const iconClassName =
        phase === "flyOut"
            ? "animate-fly-out"
            : phase === "flyIn"
              ? "animate-fly-in"
              : "";
    return (
        <div
            className={`fixed bottom-8 right-8 z-[99] transition-all duration-500 sm:bottom-12 sm:right-12 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
            }`}
        >
            <button
                onClick={handleClick}
                className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border bg-white/10 shadow-[0_4px_16px_0_rgba(25,25,25,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 dark:border-white/15 dark:bg-dark-200/50 sm:h-16 sm:w-16"
            >
                <ChevronsUp
                    className={`relative z-10 h-7 w-7 text-gray-600 transition-colors group-hover:text-blue-500 dark:text-gray-300 sm:h-9 sm:w-9 ${iconClassName}`}
                    onAnimationEnd={togglePhase}
                />
            </button>
        </div>
    );
}
