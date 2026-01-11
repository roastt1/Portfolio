"use client";

import { Logo } from "./Logo";

export default function Footer() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="relative mt-20 w-full border-t border-gray-200 bg-white py-12 backdrop-blur-md dark:border-gray-800 dark:bg-dark-100 dark:text-white">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:gap-4">
                {/* 로고 및 저작권 */}
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <Logo onClick={() => scrollToSection("home")} size={28} />
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        © 2026 Park Joon Seon. All rights reserved.
                    </p>
                </div>

                {/* nav 링크 */}
                <nav className="flex gap-6 text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="cursor-pointer transition-colors hover:text-blue-500"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="cursor-pointer transition-colors hover:text-blue-500"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection("skills")}
                        className="cursor-pointer transition-colors hover:text-blue-500"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="cursor-pointer transition-colors hover:text-blue-500"
                    >
                        Projects
                    </button>
                </nav>

                {/* 깃허브 */}
                <a
                    href="https://github.com/roastt1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 transition-all hover:bg-black hover:text-white dark:bg-dark-200 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor" // text-white hover 적용
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                </a>
            </div>
        </footer>
    );
}
