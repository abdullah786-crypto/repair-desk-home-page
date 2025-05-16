// import ''

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // apne project ke hisab se update karein
  theme: {
    extend: {
      screens: {
        "xs": "480px",
        'sm': "640px",
        'md': "768px",
        'lg': "1024px",
        'xl': "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2300px",
        "5xl": "2500px",
        "6xl": "3100px",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
