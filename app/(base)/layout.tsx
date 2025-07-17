export default function BaseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="mx-auto my-8 w-full max-w-[1480px] px-4">
            {children}
        </main>
    );
}
