export default function Footer() {
    return (
        <footer className="bg-background-100 flex w-full flex-col items-center justify-center gap-2 py-8 text-center font-sans">
            <p className="text-font-100 text-caption font-medium">
                © 2025 Portfolio. All rights reserved.
            </p>
            <a
                href="https://github.com/roastt1" // 👉 여기 본인 깃허브 주소
                target="_blank"
                rel="noopener noreferrer"
                className="text-font-100 flex items-center gap-1 hover:underline"
            >
                {/* GitHub 아이콘 */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.475 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.637-1.338-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.547 1.379.202 2.396.1 2.649.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.685-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.481A10.003 10.003 0 0022 12c0-5.525-4.477-10-10-10z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>GitHub</span>
            </a>
        </footer>
    );
}
