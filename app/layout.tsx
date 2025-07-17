import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className={`${inter.className} flex min-h-screen flex-col`}
                style={{ minHeight: "100vh" }}
            >
                <Header />
                <main className="flex-1 pb-[80px] pt-[72px]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
