// app/about/page.tsx
"use client";

import Card from "./Card";

export default function About() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Card
                    iconSrc="/images/next.svg"
                    iconAlt="X"
                    title="👋 Hi, I'm Park Joon Seon"
                    description="Passionate Frontend Developer."
                    animationDelay="0.2s"
                />
            </div>
        </>
    );
}
