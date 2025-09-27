"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Gowun_Dodum } from "next/font/google";
import { usePathname } from "next/navigation";
import DarkMode from "./components/DarkMode";

const gowunDodum = Gowun_Dodum({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

function getBgClass(pathname: string) {
    if (pathname === "/" || pathname.startsWith("/home"))
        return "home-bg animate-slideBgFast sm:animate-slideBgSlow dark:bg-dark-100";
    if (pathname.startsWith("/about")) return "dark:bg-dark-100";
    if (pathname.startsWith("/skills")) return "dark:bg-dark-100";
    if (pathname.startsWith("/projects")) return "dark:bg-dark-100";
    return "";
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const bgClass = getBgClass(pathname);

    return (
        <html lang="ko">
            <body
                className={`${gowunDodum.className} body flex min-h-screen flex-col transition-all ${bgClass}`}
                style={{ minHeight: "100vh" }}
            >
                <Header />
                <main className="mx-auto my-8 w-full max-w-[1480px] flex-1 px-4 pb-[80px] pt-[72px]">
                    {children}
                </main>

                <DarkMode />
                <Footer />
            </body>
        </html>
    );
}
