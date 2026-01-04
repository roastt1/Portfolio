import { Pin, PinOff } from "lucide-react";

interface HeaderPinProps {
    isPinned: boolean;
    onToggle: () => void;
}

export function HeaderPin({ isPinned, onToggle }: HeaderPinProps) {
    return (
        <button
            onClick={onToggle}
            className={`rounded-full p-2 transition-all ${
                isPinned
                    ? "bg-blue-500 text-white shadow-inner"
                    : "text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-200"
            }`}
            title={isPinned ? "고정 해제" : "헤더 고정"}
        >
            {isPinned ? <Pin size={20} /> : <PinOff size={20} />}
        </button>
    );
}
