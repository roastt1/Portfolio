"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectConstants } from "@/constants/projectConstants";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        content: "",
    });
    return (
        <>
            <div className="mt-16 flex w-full flex-col items-center gap-16">
                {projectConstants.map((project, i) => (
                    <ProjectCard
                        key={i}
                        title={project.title}
                        content={project.content}
                        image={project.image}
                        openModal={() => {
                            setModalData(project);
                            setIsOpen(true);
                        }}
                    />
                ))}

                {modalData && (
                    <ProjectModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        title={modalData.title}
                        content={modalData.content}
                    />
                )}
            </div>
        </>
    );
}
