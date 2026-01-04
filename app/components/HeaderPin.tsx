import { Pin, PinOff } from "lucide-react";

interface HeaderPinProps {
    isPinned: boolean;
    onToggle: () => void;
}

export function HeaderPin({ isPinned, onToggle }: HeaderPinProps) {
    return (
        <button
            onClick={onToggle}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                isPinned
                    ? "border-blue-500 bg-blue-500 text-white shadow-inner"
                    : "border-gray-300 text-gray-400 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-dark-200"
            }`}
            title={isPinned ? "고정 해제" : "헤더 고정"}
        >
            {isPinned ? <Pin size={20} /> : <PinOff size={20} />}
        </button>
    );
}
