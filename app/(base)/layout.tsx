import Footer from "../components/Footer";
import Header from "../components/Header";
import "../../app/globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="mx-auto min-h-[600px] w-full max-w-[1480px] px-4">
                {children}
            </main>
            <Footer />
        </>
    );
}
