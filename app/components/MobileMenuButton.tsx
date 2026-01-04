import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
    return (
        <button
            className="rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-dark-200 md:hidden"
            onClick={onToggle}
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
}
