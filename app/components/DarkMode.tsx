"use client";

import { useEffect, useState } from "react";

export default function DarkMode() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // 로컬스토리지에 저장된 테마 가져오기
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;

        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
        } else {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
                document.documentElement.classList.add("dark");
            } else {
                setTheme("light");
                document.documentElement.classList.remove("dark");
            }
        }
    }, []);

    // 버튼 클릭 시 테마 토글 함수
    const toggleTheme = () => {
        if (theme === "dark") {
            // 다크 모드 -> 라이트 모드
            setTheme("light");
            localStorage.removeItem("theme");
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        } else {
            // 라이트 모드 -> 다크 모드
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-[99] flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white p-0 shadow-lg transition hover:bg-gray-100 dark:border-gray-600 dark:bg-[#202026] dark:text-white sm:bottom-16 sm:right-16 sm:h-16 sm:w-16"
        >
            {theme === "light" ? "light" : "dark"}
        </button>
    );
}
