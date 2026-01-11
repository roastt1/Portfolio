"use client";

interface LogoProps {
    onClick: () => void;
    size?: number;
}

export function Logo({ onClick, size = 32 }: LogoProps) {
    const boxSize = size;
    const fontSize = size * 0.75;
    const containerFontSize = size * 0.75;

    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-2 font-black tracking-tight transition-all"
            style={{ fontSize: `${containerFontSize}px` }}
        >
            {/* JS 박스 */}
            <div
                className="flex rotate-[8deg] items-center justify-center rounded-lg bg-blue-500 text-white transition-all group-active:rotate-[16deg] group-active:scale-90 sm:group-hover:rotate-[16deg]"
                style={{
                    width: `${boxSize}px`,
                    height: `${boxSize}px`,
                    fontSize: `${fontSize}px`,
                }}
            >
                JS
            </div>

            {/* 텍스트 */}
            <span className="rotate-[-2deg] transition-all group-active:rotate-[-6deg] group-active:scale-90 dark:text-white sm:group-hover:rotate-[-6deg]">
                Portfolio
            </span>
        </button>
    );
}
