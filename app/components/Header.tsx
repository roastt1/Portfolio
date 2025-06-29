import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-24 py-4">
            <div>
                <Link href="/" className="text-2xl font-bold">
                    JoonSeon&#39;s Portfolio
                </Link>
            </div>
            <div className="flex gap-12">
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
            </div>
        </header>
    );
}
