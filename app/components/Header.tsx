"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const sections = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "skills", label: "skills" },
    { id: "projects", label: "projects" },
];

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴 상태

    const toggleHeader = () => {
        setShowHeader((prev) => !prev);
    };

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // 모바일 메뉴 닫기
        }
    };

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-20 w-full bg-white shadow-md backdrop-blur-sm transition-transform duration-500 dark:bg-dark-100 dark:text-white ${
                    showHeader ? "translate-y-0" : "-translate-y-full"
                }`}
                suppressHydrationWarning
            >
                <div className="relative mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
                    {/* 로고 */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="group flex items-center gap-2 text-2xl font-black tracking-tight transition-all"
                    >
                        <div className="flex h-8 w-8 rotate-[8deg] items-center justify-center rounded-lg bg-blue-500 text-white transition-transform group-active:rotate-[16deg] sm:group-hover:rotate-[16deg]">
                            JS
                        </div>
                        <span className="rotate-[-2deg] transition-transform group-active:rotate-[-6deg] dark:text-white sm:group-hover:rotate-[-6deg]">
                            Portfolio
                        </span>
                    </button>

                    {/* 데스크톱 메뉴 */}
                    <nav className="hidden items-center gap-12 md:flex">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="text-base font-black transition hover:text-blue-400"
                            >
                                {section.label}
                            </button>
                        ))}
                    </nav>

                    {/* 모바일 햄버거 버튼 */}
                    <button
                        className="rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-dark-200 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* 헤더 토글 버튼 */}
                    <button
                        onClick={toggleHeader}
                        className={`absolute -bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full bg-white p-3 shadow-md transition hover:scale-110 dark:bg-dark-100 md:block ${
                            !showHeader
                                ? "animate-glow dark:animate-darkglow"
                                : ""
                        }`}
                    >
                        {showHeader ? (
                            <ChevronUp size={24} />
                        ) : (
                            <ChevronDown size={24} />
                        )}
                    </button>
                </div>

                {/* 모바일 메뉴 드롭다운 */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                        menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <nav className="flex flex-col items-center gap-4 border-t bg-white py-4 shadow-md dark:border-dark-200 dark:bg-dark-100">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="w-full text-center font-bold hover:text-blue-400"
                            >
                                {section.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
