"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectConstants } from "@/constants/projectConstants";

interface ModalData {
    title: string;
    content: string;
    images: string[];
    duration: string;
    details: string;
    contributions: string;
    troubleshooting: string;
}

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState<ModalData>({
        title: "",
        content: "",
        images: [], // 빈 배열이지만, ModalData 인터페이스에 의해 string[]으로 타입 지정됨
        duration: "",
        details: "",
        contributions: "",
        troubleshooting: "",
    });
    return (
        <>
            <div className="mt-16 flex w-full flex-wrap justify-center gap-8">
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
                        // ProjectCard 내부에 w-[320px] 같은 고정 너비 지정 필요
                    />
                ))}
            </div>

            <ProjectModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={modalData.title}
                images={modalData.images}
                details={modalData.details}
                contributions={modalData.contributions}
                troubleshooting={modalData.troubleshooting}
            />
        </>
    );
}
