interface NavLinksProps {
    sections: { id: string; label: string }[];
    onAction: (id: string) => void;
    isMobile?: boolean;
}

export function NavLinks({ sections, onAction, isMobile }: NavLinksProps) {
    return (
        <>
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => onAction(section.id)}
                    className={
                        isMobile
                            ? "w-full py-2 text-center font-bold hover:text-blue-400" // 모바일 스타일
                            : "text-lg font-black transition hover:text-blue-400" // 데스크톱 스타일
                    }
                >
                    {section.label}
                </button>
            ))}
        </>
    );
}
