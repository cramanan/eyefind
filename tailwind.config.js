/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "maze-pattern": "url('/maze-pattern.png')",
                "legendary-pattern": "url('/legendary-pattern.png')",
            },
        },
    },
    plugins: [],
};
