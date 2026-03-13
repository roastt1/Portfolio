interface NavLinksProps {
    sections: { id: string; label: string }[];
    onAction: (id: string) => void;
    isMobile?: boolean;
    activeSection?: string;
}

export function NavLinks({ sections, onAction, isMobile, activeSection }: NavLinksProps) {
    return (
        <>
            {sections.map((section) => {
                const isActive = section.id === activeSection;
                return (
                    <button
                        key={section.id}
                        onClick={() => onAction(section.id)}
                        className={
                            isMobile
                                ? `w-full py-2 text-center font-bold hover:text-blue-400 ${isActive ? "text-blue-400 font-black" : ""}` // 모바일 스타일
                                : `text-lg font-black transition hover:text-blue-400 ${isActive ? "text-blue-400" : ""}` // 데스크톱 스타일
                        }
                    >
                        {section.label}
                    </button>
                );
            })}
        </>
    );
}
