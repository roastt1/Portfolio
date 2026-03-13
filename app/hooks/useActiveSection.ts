"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]): string {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");
    const sectionIdsRef = useRef(sectionIds);
    sectionIdsRef.current = sectionIds;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
        );

        sectionIdsRef.current.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []); // 마운트 시 한 번만 실행 — sectionIds는 모듈 레벨 상수라 변하지 않음

    return activeSection;
}
