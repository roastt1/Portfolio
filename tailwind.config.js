/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // app 디렉토리
        "./pages/**/*.{js,ts,jsx,tsx}", // pages 디렉토리
        "./components/**/*.{js,ts,jsx,tsx}", // 컴포넌트 폴더 (있는 경우)
    ],
    theme: {
        extend: {
            keyframes: {
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(50px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-left-fade": {
                    "0%": { opacity: "0", transform: "translateX(50px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                glow: {
                    "0%, 100%": {
                        filter: "drop-shadow(0 0 8px rgba(0, 0, 0, 0.2))",
                    },
                    "50%": {
                        filter: "drop-shadow(0 0 16px rgba(0, 0, 0, 1))",
                    },
                },
                darkglow: {
                    "0%, 100%": {
                        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))",
                    },
                    "50%": {
                        filter: "drop-shadow(0 0 16px rgba(255, 255, 255, 1))",
                    },
                },
                slideBgFast: {
                    from: { "background-position": "0 0" },
                    to: { "background-position": "250% 100%" },
                },
                slideBgSlow: {
                    from: { "background-position": "0 0" },
                    to: { "background-position": "100% 100%" },
                },
            },
            animation: {
                "slide-up": "slide-up 0.8s ease-out forwards",
                "slide-left-fade": "slide-left-fade 0.8s ease-out forwards",
                glow: "glow 1.5s ease-in-out infinite",
                darkglow: "darkglow 1.5s ease-in-out infinite",
                slideBgFast: "slideBgFast 20s linear infinite",
                slideBgSlow: "slideBgSlow 40s linear infinite",
            },
            colors: {
                dark: {
                    100: "#1d1d1d", // 헤더 색상
                    200: "#353535", // 메인 색상
                    300: "#717171",
                    400: "#a3a3a3",
                },
            },
        },
    },
    plugins: [],
};
