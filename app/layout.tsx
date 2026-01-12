// app/layout.tsx (서버 컴포넌트)
import { Metadata } from "next";
import ClientLayout from "./ClientLayout";
export const metadata: Metadata = {
    title: "박준선 | 프론트엔드 개발자 포트폴리오",
    description:
        "React, Next.js, TypeScript를 기반으로 더 나은 UX를 설계하는 프론트엔드 개발자 박준선입니다.",

    // 검색 엔진 키워드
    keywords: [
        "박준선",
        "프론트엔드 개발자",
        "프론트엔드 개발자 포트폴리오",
        "신입 개발자 포트폴리오",
    ],

    // 카톡, 페이스북, 슬랙 등에 공유될 때 표시
    openGraph: {
        title: "박준선 | 프론트엔드 개발자 포트폴리오",
        description:
            "React, Next.js, TypeScript를 기반으로 더 나은 UX를 설계하는 프론트엔드 개발자 박준선입니다.",
        url: "https://joonseon-portfolio.vercel.app/",
        siteName: "박준선 포트폴리오",
        images: [
            {
                url: "/images/landing-image.png",
                width: 1200,
                height: 630,
                alt: "박준선 포트폴리오 메인 이미지",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },

    icons: {
        icon: [{ url: "/icons/favicon.svg", type: "image/svg+xml" }],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <ClientLayout>{children}</ClientLayout>
        </html>
    );
}
