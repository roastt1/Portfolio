import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
            <div>
                <Link href="/" className="text-2xl font-bold">
                    JoonSeon's Portfolio
                </Link>
            </div>
            <div className="flex gap-6">
                <Link href="/about" className=" hover:underline">
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
