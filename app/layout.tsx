import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Gowun_Dodum } from "next/font/google";

const gowunDodum = Gowun_Dodum({
    weight: "400",
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
                className={`${gowunDodum.className} bg-animated-gradient flex min-h-screen flex-col`}
                style={{ minHeight: "100vh" }}
            >
                <Header />
                <main className="flex-1 pb-[80px] pt-[72px]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
