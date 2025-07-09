import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row md:gap-0 md:px-12 lg:px-24">
            <div>
                <Link href="/" className="text-xl font-bold md:text-2xl">
                    JoonSeon&#39;s Portfolio
                </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
                <Link href="/" className="hover:underline">
                    home
                </Link>
                <Link href="/about" className="hover:underline">
                    about
                </Link>
                <Link href="/skills" className="hover:underline">
                    skills
                </Link>
                <Link href="/projects" className="hover:underline">
                    projects
                </Link>
            </nav>
        </header>
    );
}
