module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // apne project ke hisab se update karein
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
}
