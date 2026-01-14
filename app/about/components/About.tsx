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
            className="relative flex w-full flex-col items-center gap-8 pt-20 dark:text-white sm:gap-16"
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
                <span>About me</span>
            </h2>

            <div className="z-10 flex w-full max-w-6xl flex-col items-center gap-8 px-6 lg:flex-row lg:gap-12">
                {/* 왼쪽 프로필 영역 */}
                <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
                    <ProfileStack />

                    <div
                        className="flex flex-col gap-4"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <h3 className="text-xl font-bold leading-tight sm:text-3xl">
                            사용자의 경험을 <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-blue-500">
                                    코드로 설계하는
                                </span>
                                <span className="absolute bottom-1 left-0 h-3 w-full bg-blue-500/10 dark:bg-blue-500/20" />
                            </span>{" "}
                            박준선입니다.
                        </h3>
                        <p className="max-w-md text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
                            사용자가 느끼는{" "}
                            <span className="text-gray-900 dark:text-gray-200">
                                작은 디테일의 차이
                            </span>
                            가 서비스의 완성도를 결정한다고 믿습니다. 단순히
                            기능 구현에 그치지 않고, 사용자의 불편함을 고민하고
                            해결하는 과정에 즐거움을 느낍니다.
                        </p>
                    </div>
                </div>

                {/* 오른쪽 정보 카드 그리드 */}
                <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-6 lg:w-[66%]">
                    {ABOUT_INFO.map((info, i) => (
                        <AboutCard
                            key={info.title}
                            title={info.title}
                            description={info.description}
                            icon={info.icon}
                            delay={i * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
