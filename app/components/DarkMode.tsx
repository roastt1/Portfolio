"use client";

import { useEffect, useState } from "react";
function SunIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-all duration-300 group-hover:scale-[1.1] group-hover:fill-orange-500 group-hover:text-orange-500"
            fill=""
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
        >
            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
        </svg>
    );
}
function MoonIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-all duration-300 group-hover:scale-[1.1] group-hover:fill-yellow-400 group-hover:text-yellow-400"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            {" "}
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />{" "}
        </svg>
    );
}
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
            className="group fixed bottom-8 right-8 z-[99] flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white p-0 shadow-lg transition hover:bg-gray-100 dark:border-gray-600 dark:bg-[#202026] dark:text-white sm:bottom-16 sm:right-16 sm:h-16 sm:w-16"
        >
            <span className="relative flex h-8 w-8 items-center justify-center">
                <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === "light" ? "animate-rise-in" : "animate-set-out"} `}
                >
                    <SunIcon />
                </span>
                <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === "dark" ? "animate-rise-in" : "animate-set-out"} `}
                >
                    <MoonIcon />
                </span>
            </span>
        </button>
    );
}
