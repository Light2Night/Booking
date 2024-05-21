/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            padding: "5rem",
        },
        extend: {
            backgroundImage: {
                "hero-home": "url('/assets/homeHero.jpeg')",
                "hero-search": "url('/assets/searchHero.jpg')",
            },
        },
        colors: {
            blue: "#003b95",
            red: "#A30000",
            lightblue: "#1A4FA0",
            white: "#ffffff",
            sky: "#006ce4",
            black: "#1a1a1a",
            gray: "#595959",
            lightgray: "#6b6b6b",
            yellow: "#ffb700",
        },
        fontFamily: {
            main: ["Roboto", "sans-serif"],
        },
    },
    plugins: [],
};
