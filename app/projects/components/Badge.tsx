"use client";
import { User, Users } from "lucide-react";

interface BadgeProps {
    text: string;
    projectType: string;
}

export default function Badge({ text, projectType }: BadgeProps) {
    const themeClass =
        projectType === "개인"
            ? "bg-blue-500/80 text-white backdrop-blur-md border-blue-400/30"
            : "bg-indigo-600/80 text-white backdrop-blur-md border-indigo-400/30";

    const IconComponent = projectType === "개인" ? User : Users;

    return (
        <div
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all duration-300 sm:text-xs ${themeClass}`}
        >
            <IconComponent size={12} strokeWidth={3} />
            <span>{text} 프로젝트</span>
        </div>
    );
}
