"use client";

interface BadgeProps {
    text: string;
    projectType: string;
}

export default function Badge({ text, projectType }: BadgeProps) {
    const baseClass = "rounded-full border px-3 py-1 text-sm font-semibold";

    const colorClass =
        projectType === "개인 프로젝트"
            ? "bg-blue-200 border-blue-400 text-blue-800"
            : "bg-green-200 border-green-400 text-green-800";

    return (
        <div className={`${baseClass} ${colorClass}`}>
            <span>{text}</span>
        </div>
    );
}
