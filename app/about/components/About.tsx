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
        <div className="flex w-full flex-col items-center pt-8">
            <div className="mb-12 flex flex-col items-center gap-10 text-center">
                {/* 프로필 사진 */}
                <div
                    className="relative mb-4 h-96 w-72 animate-slide-up overflow-hidden rounded-3xl border-4 border-blue-400 shadow-md sm:h-[450px] sm:w-[400px]"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <Image
                        src="/images/about/about_me.jpg"
                        alt="Profile Picture"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* 소개 */}
                <div className="mb-4 flex animate-slide-up flex-col items-center space-y-2 whitespace-nowrap">
                    <h1
                        className="mb-4 animate-slide-up text-2xl font-bold sm:text-3xl"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        안녕하세요! 박준선입니다.
                    </h1>
                    <p
                        className="max-w-xl animate-slide-up text-sm sm:text-xl"
                        data-aos="fade-up"
                        data-aos-delay={400}
                    >
                        항상 사용자 입장에서 고민하며,
                    </p>
                    <p
                        className="max-w-xl animate-slide-up text-sm sm:text-xl"
                        data-aos="fade-up"
                        data-aos-delay={700}
                    >
                        더 나은 경험을 만드는 프론트엔드 개발자입니다.
                    </p>
                    <p
                        className="max-w-2xl animate-slide-up text-sm sm:text-xl"
                        data-aos="fade-up"
                        data-aos-delay={1000}
                    >
                        누구나 직관적이고 편하게 사용할 수 있는 웹을 지향합니다.
                    </p>
                </div>
            </div>

            {/* 정보 카드 */}
            <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
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
