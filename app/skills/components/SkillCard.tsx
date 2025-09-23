"use client";

import Image from "next/image";

interface SkillCardProps {
    icon: string;
    name: string;
}

export default function SkillCard({ icon, name }: SkillCardProps) {
    return (
        <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex h-32 w-32 select-none flex-col items-center justify-center rounded-[30px] border-2 border-blue-100 bg-white/80 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/80 hover:shadow-2xl">
                <div className="mb-4">
                    <Image src={icon} alt={name} width={48} height={48} />
                </div>
                <p className="text-base font-semibold lg:text-lg">{name}</p>
            </div>
        </div>
    );
}
