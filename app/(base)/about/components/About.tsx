"use client";

import Image from "next/image";
import AboutCard from "./AboutCard";

export default function About() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="mb-12 flex flex-col items-center text-center">
                {/* 프로필 사진 */}
                <div className="relative mb-4 h-36 w-36 animate-slide-up overflow-hidden rounded-full border-4 border-white shadow-md lg:h-72 lg:w-72">
                    <Image
                        src="/images/landing-image.png"
                        alt="Profile Picture"
                        fill
                        sizes="144px"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* 소개 */}
                <div className="mb-4 flex animate-slide-up flex-col items-center space-y-2 text-white">
                    <h1
                        className="mb-4 animate-slide-up text-xl font-bold sm:text-3xl lg:text-4xl"
                        style={{ animationDelay: "0.2s" }}
                    >
                        안녕하세요! 박준선입니다.
                    </h1>
                    <p
                        className="max-w-xl animate-slide-up text-sm sm:text-xl lg:text-2xl"
                        style={{ animationDelay: "0.4s" }}
                    >
                        항상 사용자 입장에서 고민하며,
                    </p>
                    <p
                        className="max-w-xl animate-slide-up text-sm sm:text-xl lg:text-2xl"
                        style={{ animationDelay: "0.7s" }}
                    >
                        더 나은 경험을 만드는 프론트엔드 개발자입니다.
                    </p>
                    <p
                        className="max-w-2xl animate-slide-up text-sm sm:text-xl lg:text-2xl"
                        style={{ animationDelay: "1s" }}
                    >
                        누구나 직관적이고 편하게 사용할 수 있는 웹을 지향합니다.
                    </p>
                </div>
            </div>
            {/* 정보 카드 */}
            <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2 lg:gap-x-6 xl:grid-cols-3">
                <AboutCard
                    title="이름"
                    description="박준선"
                    animationDelay="0.2s"
                    iconSrc="/icons/about/name.svg"
                />
                <AboutCard
                    title="생년월일"
                    description="2000.02.18"
                    animationDelay="0.3s"
                    iconSrc="/icons/about/birth.svg"
                />
                <AboutCard
                    title="위치"
                    description="경기도 남양주시"
                    animationDelay="0.4s"
                    iconSrc="/icons/about/location.svg"
                />
                <AboutCard
                    title="연락처"
                    description="010-8298-9208"
                    animationDelay="0.5s"
                    iconSrc="/icons/about/contact.svg"
                />
                <AboutCard
                    title="이메일"
                    description="roastt1@naver.com"
                    animationDelay="0.6s"
                    iconSrc="/icons/about/email.svg"
                />
                <AboutCard
                    title="학력"
                    description="서경대학교 소프트웨어학과"
                    animationDelay="0.7s"
                    iconSrc="/icons/about/education.svg"
                />
            </div>
        </div>
    );
}
