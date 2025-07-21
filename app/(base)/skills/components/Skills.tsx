"use client";

import SkillCard from "./SkillCard";

export default function Skills() {
    return (
        <div className="flex w-full flex-col items-center gap-16 pt-16">
            <span className="mb-8 text-4xl font-bold">Tech Stack</span>

            {/* Frontend */}
            <div className="mb-6 w-full max-w-5xl">
                <h2 className="mb-4 text-2xl font-semibold">Frontend</h2>
                <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <SkillCard
                        name="HTML"
                        icon="/icons/skills/html.svg"
                        animationDelay="0.05s"
                    />
                    <SkillCard
                        name="CSS"
                        icon="/icons/skills/css.svg"
                        animationDelay="0.10s"
                    />
                    <SkillCard
                        name="JavaScript"
                        icon="/icons/skills/javascript.svg"
                        animationDelay="0.15s"
                    />
                    <SkillCard
                        name="TypeScript"
                        icon="/icons/skills/typescript.svg"
                        animationDelay="0.20s"
                    />
                    <SkillCard
                        name="React"
                        icon="/icons/skills/react.svg"
                        animationDelay="0.25s"
                    />
                    <SkillCard
                        name="Next.js"
                        icon="/icons/skills/nextjs.svg"
                        animationDelay="0.30s"
                    />
                    <SkillCard
                        name="TailwindCSS"
                        icon="/icons/skills/tailwind.svg"
                        animationDelay="0.35s"
                    />
                </div>
            </div>

            {/* Backend */}
            <div className="mb-6 w-full max-w-5xl">
                <h2 className="mb-4 text-2xl font-semibold">Backend</h2>
                <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <SkillCard
                        name="Node.js"
                        icon="/icons/skills/nodejs.svg"
                        animationDelay="0.40s"
                    />
                    <SkillCard
                        name="Express"
                        icon="/icons/skills/express.svg"
                        animationDelay="0.45s"
                    />
                    <SkillCard
                        name="Prisma"
                        icon="/icons/skills/prisma.svg"
                        animationDelay="0.50s"
                    />
                    <SkillCard
                        name="MongoDB"
                        icon="/icons/skills/mongodb.svg"
                        animationDelay="0.55s"
                    />
                    <SkillCard
                        name="Socket.IO"
                        icon="/icons/skills/socketio.svg"
                        animationDelay="0.60s"
                    />
                </div>
            </div>

            {/* Tools & Others */}
            <div className="w-full max-w-5xl">
                <h2 className="mb-4 text-2xl font-semibold">Tools & Others</h2>
                <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <SkillCard
                        name="GitHub"
                        icon="/icons/skills/github.svg"
                        animationDelay="0.65s"
                    />
                    <SkillCard
                        name="Notion"
                        icon="/icons/skills/notion.svg"
                        animationDelay="0.70s"
                    />
                    <SkillCard
                        name="Discord"
                        icon="/icons/skills/discord.svg"
                        animationDelay="0.75s"
                    />
                </div>
            </div>
        </div>
    );
}
