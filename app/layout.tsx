"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Gowun_Dodum } from "next/font/google";
import { usePathname } from "next/navigation";

const gowunDodum = Gowun_Dodum({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

function getBgClass(pathname: string) {
    if (pathname === "/" || pathname.startsWith("/home"))
        return "home-bg animate-slideBgFast sm:animate-slideBgSlow";
    if (pathname.startsWith("/about")) return "about-bg";
    if (pathname.startsWith("/skills")) return "skills-bg";
    if (pathname.startsWith("/projects")) return "projects-bg";
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
                className={`${gowunDodum.className} body flex min-h-screen flex-col ${bgClass}`}
                style={{ minHeight: "100vh" }}
            >
                <Header />
                <main className="flex-1 pb-[80px] pt-[72px]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
