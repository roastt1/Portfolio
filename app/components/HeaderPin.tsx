import { Pin } from "lucide-react";

interface HeaderPinProps {
    isPinned: boolean;
    onToggle: () => void;
}

export function HeaderPin({ isPinned, onToggle }: HeaderPinProps) {
    return (
        <button
            onClick={onToggle}
            className={`group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                isPinned
                    ? "border-blue-500 bg-blue-500 text-white shadow-inner"
                    : "border-gray-300 text-gray-400 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-dark-200"
            }`}
        >
            <div
                className={`transition-transform duration-300 ${isPinned ? "rotate-45 scale-110" : "rotate-0"}`}
            >
                <Pin size={20} />
            </div>

            <span className="absolute top-14 scale-0 rounded bg-gray-800 px-2 py-2 text-xs text-white transition-all group-hover:scale-100 dark:bg-gray-200 dark:text-black">
                {isPinned ? "고정됨" : "헤더 고정하기"}
            </span>
        </button>
    );
}
