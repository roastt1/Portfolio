/** @type {import('tailwindcss').Config} */
module.exports = {
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
                        filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2))",
                    },
                    "50%": {
                        filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.4))",
                    },
                },
            },
            animation: {
                "slide-up": "slide-up 0.8s ease-out forwards",
                "slide-left-fade": "slide-left-fade 0.8s ease-out forwards",
                glow: "glow 1.5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
