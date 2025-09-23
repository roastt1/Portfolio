"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCard from "./SkillCard";

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 600, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="flex w-full flex-col items-center gap-16 pt-8">
            <span className="text-4xl font-bold">Tech Stack</span>

            {/* Frontend */}
            <div className="mb-6 w-full max-w-5xl">
                <h2 className="mb-4 text-2xl font-semibold">Frontend</h2>
                <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <SkillCard name="HTML" icon="/icons/skills/html.svg" />
                    <SkillCard name="CSS" icon="/icons/skills/css.svg" />
                    <SkillCard
                        name="JavaScript"
                        icon="/icons/skills/javascript.svg"
                    />
                    <SkillCard
                        name="TypeScript"
                        icon="/icons/skills/typescript.svg"
                    />
                    <SkillCard name="React" icon="/icons/skills/react.svg" />
                    <SkillCard name="Next.js" icon="/icons/skills/nextjs.svg" />
                    <SkillCard
                        name="TailwindCSS"
                        icon="/icons/skills/tailwind.svg"
                    />
                </div>
            </div>

            {/* Backend */}
            <div className="mb-6 w-full max-w-5xl">
                <h2 className="mb-4 text-2xl font-semibold">Backend</h2>
                <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <SkillCard name="Node.js" icon="/icons/skills/nodejs.svg" />
                    <SkillCard
                        name="Express"
                        icon="/icons/skills/express.svg"
                    />
                    <SkillCard name="Prisma" icon="/icons/skills/prisma.svg" />
                    <SkillCard
                        name="MongoDB"
                        icon="/icons/skills/mongodb.svg"
                    />
                    <SkillCard
                        name="Socket.IO"
                        icon="/icons/skills/socketio.svg"
                    />
                </div>
            </div>

            {/* Tools & Others */}
            <div className="w-full max-w-5xl">
                <h2 className="mb-4 text-2xl font-semibold">Tools & Others</h2>
                <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <SkillCard name="GitHub" icon="/icons/skills/github.svg" />
                    <SkillCard name="Notion" icon="/icons/skills/notion.svg" />
                    <SkillCard
                        name="Discord"
                        icon="/icons/skills/discord.svg"
                    />
                </div>
            </div>
        </div>
    );
}
