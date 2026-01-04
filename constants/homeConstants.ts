import { BookText, CircleUser, Folders } from "lucide-react";

export const HOMESECTION_BUTTONS = [
    {
        id: "about",
        label: "Meet the Developer",
        icon: CircleUser,
        color: "from-violet-500 to-pink-400",
    },
    {
        id: "skills",
        label: "View My Skills",
        icon: BookText,
        color: "from-indigo-500 to-blue-400",
    },
    {
        id: "projects",
        label: "My Work",
        icon: Folders,
        color: "from-blue-400 to-cyan-400",
    },
] as const;
