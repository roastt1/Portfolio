"use client";

import { useState } from "react";
import { ChevronsUp } from "lucide-react";
export default function ScrollToTopButton() {
    const [phase, setPhase] = useState<"idle" | "flyOut" | "flyIn">("idle");

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleClick = () => {
        // 애니메이션 중엔 재시작하지 않음
        if (phase !== "idle") return;
        scrollToSection("home");
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
        <div>
            <button
                onClick={handleClick}
                className="fixed bottom-8 right-8 z-[99] flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white p-0 shadow-lg transition hover:bg-gray-100 dark:border-gray-600 dark:bg-[#202026] dark:text-white sm:bottom-16 sm:right-16 sm:h-16 sm:w-16"
            >
                <ChevronsUp
                    className={`h-6 w-6 sm:h-8 sm:w-8 ${iconClassName}`}
                    onAnimationEnd={togglePhase}
                />
            </button>
        </div>
    );
}
