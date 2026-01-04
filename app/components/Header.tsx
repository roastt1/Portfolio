"use client";

import { useEffect, useState } from "react";
import { HeaderPin } from "./HeaderPin";
import { MobileMenuButton } from "./MobileMenuButton";
import { NavLinks } from "./NavLinks";

const sections = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "skills", label: "skills" },
    { id: "projects", label: "projects" },
];

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [isPinned, setIsPinned] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isPinned || menuOpen) {
                setShowHeader(true);
                return;
            }

            if (currentScrollY < 50) {
                setShowHeader(true);
            } else if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isPinned, menuOpen]);

    const togglePin = () => {
        setIsPinned((prev) => !prev);
        setShowHeader(true);
    };

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
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
                        className="group z-30 flex items-center gap-2 text-2xl font-black tracking-tight transition-all"
                    >
                        <div className="flex h-8 w-8 rotate-[8deg] items-center justify-center rounded-lg bg-blue-500 text-white transition-transform group-active:rotate-[16deg] sm:group-hover:rotate-[16deg]">
                            JS
                        </div>
                        <span className="rotate-[-2deg] transition-transform group-active:rotate-[-6deg] dark:text-white sm:group-hover:rotate-[-6deg]">
                            Portfolio
                        </span>
                    </button>

                    {/* 데스크톱 메뉴 */}
                    <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 md:flex">
                        <NavLinks
                            sections={sections}
                            onAction={scrollToSection}
                        />
                    </nav>

                    {/* 우측 버튼 영역 */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* 헤더 핀 버튼 */}
                        <HeaderPin isPinned={isPinned} onToggle={togglePin} />

                        {/* 모바일 메뉴 버튼 */}
                        <MobileMenuButton
                            isOpen={menuOpen}
                            onToggle={() => setMenuOpen(!menuOpen)}
                        />
                    </div>
                </div>

                {/* 모바일 메뉴 드롭다운 */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <nav className="flex flex-col items-center gap-4 border-t bg-white py-4 shadow-md dark:border-dark-200 dark:bg-dark-100">
                        <NavLinks
                            sections={sections}
                            onAction={scrollToSection}
                            isMobile
                        />
                    </nav>
                </div>
            </header>
        </>
    );
}
