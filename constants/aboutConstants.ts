import {
    Calendar,
    GraduationCap,
    Mail,
    MapPin,
    Phone,
    User,
} from "lucide-react";

export const ABOUT_INFO = [
    { title: "이름", description: "박준선", icon: User },
    { title: "생년월일", description: "2000.02.18", icon: Calendar },
    { title: "위치", description: "경기도 남양주시", icon: MapPin },
    { title: "연락처", description: "010-8298-9208", icon: Phone },
    { title: "이메일", description: "roastt1@naver.com", icon: Mail },
    {
        title: "학력",
        description: "서경대학교 소프트웨어",
        icon: GraduationCap,
    },
];

export const PROFILE_IMAGES = [
    "/images/about/about_me1.jpg",
    "/images/about/about_me2.jpg",
];
