/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            background: "#F8FAFC",
            primary: "#7C5CFF",
            text: "#0F172A",
            muted: "#64748B",
            card: "#FFFFFF",
            accent: "#e3ca80",
          },
          backgroundImage: {
            'hero-gradient': 'linear-gradient(135deg, #7C5CFF 0%, #FF8CDA 100%)',
          },
        },
    },
    plugins: [],
};
