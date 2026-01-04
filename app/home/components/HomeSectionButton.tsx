"use client";

import { LucideIcon } from "lucide-react";

interface HomeSectionButtonProps {
    label: string;
    icon: LucideIcon;
    color: string;
    index: number;
    step: number;
    onClick: () => void;
}

export function HomeSectionButton({
    label,
    icon: Icon,
    color,
    index,
    step,
    onClick,
}: HomeSectionButtonProps) {
    // 애니메이션 활성화 여부 계산
    const isVisible = step >= 4 + index;

    return (
        <button
            onClick={onClick}
            className={`group relative flex items-center justify-between overflow-hidden rounded-xl border border-gray-200 bg-white/80 p-3 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-gray-800 dark:bg-dark-100/80 sm:rounded-2xl sm:p-5 ${
                isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
            }`}
        >
            <div className="z-10 flex items-center gap-5">
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg transition-transform group-hover:rotate-12`}
                >
                    <Icon size={24} />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Section
                    </span>
                    <span className="text-base font-black text-gray-800 dark:text-gray-100 sm:text-lg">
                        {label}
                    </span>
                </div>
            </div>

            {/* 시각적 균형을 위한 포인트 요소 */}
            <div className="z-10 h-2 w-2 rounded-full bg-gray-200 transition-all group-hover:scale-150 group-hover:bg-blue-500" />

            {/* 배경 인덱스 숫자 */}
            <span className="absolute -bottom-1 -right-1 select-none text-6xl font-black italic text-gray-100 transition-all group-hover:text-blue-500/20 dark:text-white/10">
                0{index + 1}
            </span>
        </button>
    );
}
