"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import AboutCard from "./AboutCard";

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="flex w-full flex-col items-center gap-6 pt-20 dark:text-white">
            <h2 className="w-full px-4 text-5xl font-black sm:text-6xl">
                About me
            </h2>

            <div className="mb-12 flex flex-col items-center gap-10 text-center">
                {/* 프로필 사진 */}
                <div
                    data-aos="fade-down"
                    data-aos-delay="100"
                    className="relative mb-4 h-96 w-72 overflow-hidden rounded-3xl border-4 border-blue-400 shadow-md dark:border-dark-400 sm:h-[450px] sm:w-[400px]"
                >
                    <Image
                        src="/images/about/about_me.jpg"
                        alt="Profile Picture"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* 소개 */}
                <div
                    data-aos="fade-down"
                    data-aos-delay="100"
                    className="flex flex-col items-center space-y-2 whitespace-nowrap"
                >
                    <h1 className="mb-4 text-2xl font-bold sm:text-3xl">
                        안녕하세요! 박준선입니다.
                    </h1>
                    <p className="max-w-xl text-sm sm:text-xl">
                        항상 사용자 입장에서 고민하며,
                    </p>
                    <p className="max-w-xl text-sm sm:text-xl">
                        더 나은 경험을 만드는 프론트엔드 개발자입니다.
                    </p>
                    <p className="max-w-2xl text-sm sm:text-xl">
                        누구나 직관적이고 편하게 사용할 수 있는 웹을 지향합니다.
                    </p>
                </div>
            </div>

            {/* 정보 카드 */}
            <div className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:w-[60vw] sm:grid-cols-2">
                <AboutCard
                    title="이름"
                    description="박준선"
                    iconSrc="/icons/about/name.svg"
                />
                <AboutCard
                    title="생년월일"
                    description="2000.02.18"
                    iconSrc="/icons/about/birth.svg"
                />
                <AboutCard
                    title="위치"
                    description="경기도 남양주시"
                    iconSrc="/icons/about/location.svg"
                />
                <AboutCard
                    title="연락처"
                    description="010-8298-9208"
                    iconSrc="/icons/about/contact.svg"
                />
                <AboutCard
                    title="이메일"
                    description="roastt1@naver.com"
                    iconSrc="/icons/about/email.svg"
                />
                <AboutCard
                    title="학력"
                    description="서경대학교 소프트웨어학과"
                    iconSrc="/icons/about/education.svg"
                />
            </div>
        </div>
    );
}
