"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCard from "./SkillCard";
import { BookText, Terminal } from "lucide-react";
import { SKILL_DATA } from "@/constants/skillConstants";

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 600, easing: "ease-in-out", once: true });
    }, []);

    return (
        <section className="flex w-full flex-col items-center gap-8 pt-20 dark:text-white sm:gap-16">
            {/* 구분선 */}
            <div
                className="mx-4 h-[1px] w-0 bg-gray-400 aos-animate:animate-expand-width"
                data-aos="fade-in"
                data-aos-once="true"
            />

            {/* 타이틀 */}
            <h2
                className="flex items-center gap-2 text-4xl font-black sm:text-5xl"
                data-aos="fade-up"
            >
                <BookText
                    className="text-blue-500"
                    size={40}
                    strokeWidth={2.5}
                />
                <span>Skill</span>
            </h2>

            {/* 터미널 컨테이너 */}
            <div className="w-full max-w-6xl rounded-3xl border border-gray-200 bg-white/30 p-6 shadow-xl backdrop-blur-md dark:border-gray-800 dark:bg-black/20 sm:p-12">
                {/* 터미널 헤더 */}
                <div className="mb-10 flex items-center gap-2 rounded-t-lg bg-gray-100/50 p-3 dark:bg-gray-800/50">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-2 font-mono text-xs text-gray-500 underline">
                        guest@joon-seon: ~/skills
                    </span>
                </div>

                <div className="flex flex-col gap-16">
                    {SKILL_DATA.map((group, i) => (
                        <div key={group.category} className="w-full">
                            <div
                                className="mb-8 flex items-center gap-3"
                                data-aos="fade-right"
                                data-aos-delay={i * 100}
                            >
                                <Terminal className="text-blue-500" size={24} />
                                <h3 className="font-mono text-2xl font-bold tracking-tight">
                                    <span className="text-blue-500">./</span>
                                    {group.category}
                                </h3>
                            </div>

                            <div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                                {group.skills.map((skill) => (
                                    <SkillCard
                                        key={skill.name}
                                        name={skill.name}
                                        icon={skill.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
