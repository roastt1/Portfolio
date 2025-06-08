import Footer from '../components/Footer';
import Header from '../components/Header';
import '../../app/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="font-sans bg-gray-200 text-font-100">
                <Header />
                <main className="mx-auto min-h-[600px] max-w-[1480px] w-full px-4">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
