/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // app 디렉토리
        './pages/**/*.{js,ts,jsx,tsx}', // pages 디렉토리
        './components/**/*.{js,ts,jsx,tsx}', // 컴포넌트 폴더 (있는 경우)
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
