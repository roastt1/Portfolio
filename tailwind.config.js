/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                expandWidth: {
                    from: { width: "0%" },
                    to: { width: "100%" },
                },
                flyOut: {
                    "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
                    "100%": {
                        opacity: "0",
                        transform: "translateY(-120%) scale(0.85)",
                    },
                },
                flyIn: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(120%) scale(0.85)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0) scale(1)",
                    },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(50px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-left-fade": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(150px) scale(0.8)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0) scale(1)",
                    },
                },
                "slide-right-fade": {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(-150px) scale(0.8)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0) scale(1)",
                    },
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
                    to: { "background-position": "250% 10%" },
                },
                slideBgSlow: {
                    from: { "background-position": "0 0" },
                    to: { "background-position": "50% 30%" },
                },
                "rise-in": {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-25px, 20px) rotate(-270deg) ",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(0, 0) rotate(0deg) ",
                    },
                },
                "set-out": {
                    "0%": {
                        opacity: "1",
                        transform: "translate(0, 0) rotate(0deg)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translate(25px, 20px) rotate(270deg)",
                    },
                },
            },
            animation: {
                "expand-width": "expandWidth 1s ease-out forwards",
                "fly-out": "flyOut 0.3s ease-out forwards",
                "fly-in": "flyIn 0.3s ease-out forwards",
                "slide-up": "slide-up 0.8s ease-out forwards",
                "slide-left-fade": "slide-left-fade 0.8s ease-out forwards",
                "slide-right-fade": "slide-right-fade 0.8s ease-out forwards",
                "rise-in":
                    "rise-in 0.5s cubic-bezier(0.25, 0, 0.25, 1) forwards",
                "set-out":
                    "set-out 0.5s cubic-bezier(0.25, 0, 0.25, 1) forwards",

                glow: "glow 1.5s ease-in-out infinite",
                darkglow: "darkglow 1.5s ease-in-out infinite",
                slideBgFast: "slideBgFast 20s linear infinite",
                slideBgSlow: "slideBgSlow 40s linear infinite",
            },
            colors: {
                dark: {
                    100: "#1d1d1d", // 헤더 색상
                    200: "#353535", // 메인 색상
                    300: "#575757",
                    400: "#8d8d8d",
                },
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("aos-animate", "&.aos-animate");
        },
    ],
};
