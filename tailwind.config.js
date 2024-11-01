/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        acsent: "#ec6552",
        cg: "#111113",

      },
      maxWidth: {
        'custom': '120rem', // Example custom width

      },
      animation: {
        'spin-slow': 'spin 35s linear infinite', // Customize the duration as needed 
        },

    },
  },
  plugins: [],
};
