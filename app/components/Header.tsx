"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const pathname = usePathname();

    const toggleHeader = () => {
        setShowHeader((prev) => !prev);
    };

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-10 w-full bg-white shadow-md backdrop-blur-sm transition-transform duration-500 dark:bg-dark-100 dark:text-white ${
                    showHeader ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="relative flex flex-col items-center gap-4 px-4 py-4">
                    <div>
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold transition-transform duration-200 hover:scale-105"
                        >
                            JoonSeon&#39;s Portfolio
                        </Link>
                    </div>
                    <nav className="flex w-full max-w-screen-md justify-center gap-4 md:gap-12">
                        <Link
                            href="/"
                            className={`flex-1 text-center hover:underline ${
                                pathname === "/" ? "font-semibold" : ""
                            }`}
                        >
                            home
                        </Link>
                        <Link
                            href="/about"
                            className={`flex-1 text-center hover:underline ${
                                pathname === "/about" ? "font-semibold" : ""
                            }`}
                        >
                            about
                        </Link>
                        <Link
                            href="/skills"
                            className={`flex-1 text-center hover:underline ${
                                pathname === "/skills" ? "font-semibold" : ""
                            }`}
                        >
                            skills
                        </Link>
                        <Link
                            href="/projects"
                            className={`flex-1 text-center hover:underline ${
                                pathname === "/projects" ? "font-semibold" : ""
                            }`}
                        >
                            projects
                        </Link>
                    </nav>

                    <button
                        onClick={toggleHeader}
                        className={`absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white p-3 shadow-md transition hover:scale-110 dark:bg-dark-100 ${
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
            </header>
        </>
    );
}
