"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutCard from "./AboutCard";
import { ABOUT_INFO } from "@/constants/aboutConstants";
import { CircleUser } from "lucide-react";
import ProfileStack from "./ProfileImageStacks";

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
    }, []);

    return (
        <section
            id="about"
            className="flex w-full flex-col items-center gap-12 py-20 dark:text-white sm:gap-20"
        >
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
                <CircleUser
                    className="text-blue-500"
                    size={40}
                    strokeWidth={2.5}
                />
                <span>About Me</span>
            </h2>

            <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center">
                {/* 왼쪽 프로필 영역  */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <ProfileStack />

                    <div
                        className="flex flex-col gap-2 px-4"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <h3 className="text-xl font-bold sm:text-3xl">
                            안녕하세요!{" "}
                            <span className="text-2xl text-blue-500 sm:text-3xl">
                                박준선
                            </span>
                            입니다.
                        </h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300 sm:text-lg">
                            사용자의 경험을 코드로 설계하며{" "}
                            <br className="sm:hidden" />
                            직관적인 웹을 지향하는 개발자입니다.
                        </p>
                    </div>
                </div>

                {/* 오른쪽 정보 카드 그리드 */}
                <div className="grid w-full max-w-2xl grid-cols-2 items-stretch gap-2 sm:gap-6 sm:px-4 lg:grid-cols-2">
                    {ABOUT_INFO.map((info, i) => (
                        <AboutCard
                            key={info.title}
                            title={info.title}
                            description={info.description}
                            icon={info.icon}
                            delay={i * 50}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
