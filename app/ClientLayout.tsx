"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Noto_Sans_KR } from "next/font/google";
import { usePathname } from "next/navigation";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

const notoSansKR = Noto_Sans_KR({
    weight: ["300", "400", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

function getBgClass(pathname: string) {
    if (pathname === "/" || pathname.startsWith("/home"))
        return "home-bg animate-slideBgFast sm:animate-slideBgSlow dark:bg-dark-200";
    return "dark:bg-dark-200";
}

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const bgClass = getBgClass(pathname);

    return (
        <body
            className={`${notoSansKR.className} body flex min-h-screen flex-col transition-all duration-300 ${bgClass}`}
        >
            <Header />
            <main className="mx-auto w-full max-w-[1480px] flex-1 px-4">
                {children}
            </main>
            <ScrollToTopButton />
            <Footer />
            <SpeedInsights />
        </body>
    );
}
