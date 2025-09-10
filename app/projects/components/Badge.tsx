"use client";

import { User, Users } from "lucide-react";

interface BadgeProps {
    text: string;
    projectType: string;
}

export default function Badge({ text, projectType }: BadgeProps) {
    const baseClass =
        "rounded-lg border min-w-[70px] px-3 py-1 text-sm font-semibold flex items-center justify-center gap-2";

    const colorClass =
        projectType === "개인"
            ? "bg-gray-400 text-white"
            : "bg-gray-800 text-white";

    const IconComponent = projectType === "개인" ? User : Users;

    return (
        <div className={`${baseClass} ${colorClass}`}>
            <IconComponent size={16} />
            <span>{text}</span>
        </div>
    );
}
