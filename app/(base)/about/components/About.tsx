// app/about/page.tsx
"use client";

import Image from "next/image";
import Card from "./Card";

export default function About() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="relative mb-8 h-40 w-40 md:h-52 md:w-52">
                <Image
                    src="/images/profile.jpg"
                    alt="x"
                    fill
                    className="rounded-full object-cover shadow-lg"
                    sizes="(max-width: 768px) 160px, 208px"
                />
            </div>
            <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-3 md:gap-6">
                <Card
                    title="이름"
                    description="박준선"
                    animationDelay="0.2s"
                    iconSrc="/icons/name.svg"
                />
                <Card
                    title="생년월일"
                    description="2000.02.18"
                    animationDelay="0.3s"
                    iconSrc="/icons/birth.svg"
                />
                <Card
                    title="위치"
                    description="경기도 남양주시"
                    animationDelay="0.4s"
                    iconSrc="/icons/location.svg"
                />
                <Card
                    title="연락처"
                    description="010-1234-5678"
                    animationDelay="0.5s"
                    iconSrc="/icons/contact.svg"
                />
                <Card
                    title="이메일"
                    description="roastt1@naver.com"
                    animationDelay="0.6s"
                    iconSrc="/icons/email.svg"
                />
                <Card
                    title="학력"
                    description="서경대학교 소프트웨어학과"
                    animationDelay="0.7s"
                    iconSrc="/icons/education.svg"
                />
            </div>
        </div>
    );
}
