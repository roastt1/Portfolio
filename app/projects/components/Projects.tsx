"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectConstants } from "@/constants/projectConstants";
import { Folders } from "lucide-react";
interface TroubleshootingItem {
    problem: string;
    cause: string;
    solution: string;
}
interface ModalData {
    title: string;
    content: string;
    images: string[];
    duration: string;
    link?: string;
    details: string;
    contributions: string;
    troubleshooting: TroubleshootingItem[];
}

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState<ModalData>({
        title: "",
        content: "",
        images: [],
        duration: "",
        link: "",
        details: "",
        contributions: "",
        troubleshooting: [],
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        AOS.init({ duration: 600, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="flex w-full flex-col items-center gap-8 pt-20 dark:text-white sm:gap-16">
            {/* 구분선 */}
            <div
                className="mx-4 h-[2px] w-0 bg-gray-400 aos-animate:animate-expand-width"
                data-aos="fade-in"
                data-aos-once="true"
            />
            {/* 타이틀 */}
            <h2
                className="flex items-center gap-2 text-4xl font-black sm:text-5xl"
                data-aos="fade-up"
            >
                <Folders
                    className="text-blue-500"
                    size={40}
                    strokeWidth={2.5}
                />
                <span>Projects</span>
            </h2>
            <div className="flex w-full flex-wrap justify-center gap-8">
                {projectConstants.map((project, i) => (
                    <ProjectCard
                        key={i}
                        projectType={project.projectType}
                        title={project.title}
                        content={project.content}
                        image={project.images[0]}
                        duration={project.duration}
                        openModal={() => {
                            setModalData(project);
                            setIsOpen(true);
                        }}
                    />
                ))}
            </div>

            <ProjectModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={modalData.title}
                images={modalData.images}
                link={modalData.link}
                details={modalData.details}
                contributions={modalData.contributions}
                troubleshooting={modalData.troubleshooting}
            />
        </div>
    );
}
