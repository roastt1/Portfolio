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
            },
            animation: {
                "slide-up": "slide-up 0.8s ease-out forwards",
                "slide-left-fade": "slide-left-fade 0.8s ease-out forwards",
            },
        },
    },
    plugins: [],
};
