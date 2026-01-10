"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE_IMAGES } from "@/constants/aboutConstants";

export default function ProfileStack() {
    const [index, setIndex] = useState(0);

    // 5초마다 자동으로 사진 변경
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="group relative h-[350px] w-full max-w-[280px] overflow-hidden rounded-2xl bg-gray-100 dark:bg-dark-300 sm:h-[450px] sm:max-w-[350px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative h-full w-full"
                >
                    <Image
                        src={PROFILE_IMAGES[index]}
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* 하단 페이지네이션 */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {PROFILE_IMAGES.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === index ? "w-6 bg-blue-500" : "w-2 bg-white"
                        }`}
                    />
                ))}
            </div>

            {/* 좌우 넘기기 버튼 */}
            <button
                onClick={() =>
                    setIndex(
                        (prev) =>
                            (prev - 1 + PROFILE_IMAGES.length) %
                            PROFILE_IMAGES.length
                    )
                }
                className="-md absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white px-1 py-2 opacity-0 transition-all hover:bg-white/40 group-hover:opacity-100"
            >
                ←
            </button>
            <button
                onClick={() =>
                    setIndex((prev) => (prev + 1) % PROFILE_IMAGES.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white px-1 py-2 opacity-0 transition-all hover:bg-white/40 group-hover:opacity-100"
            >
                →
            </button>
        </div>
    );
}
