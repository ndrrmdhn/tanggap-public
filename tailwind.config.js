/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        text10_14: ["10px", "14px"],
        text16_20: ["16px", "20px"],
        text16_24: ["16px", "24px"],
        text18_20: ["18px", "20px"],
        text20_30: ["20px", "30px"],
        text30_40: ["30px", "40px"],
        text36_40: ["36px", "40px"],
        text40_60: ["40px", "60px"],
        text50_60: ["50px", "60px"],
      },
      colors: {
        "color-1": "rgba(0, 132, 214, 1)",
        "color-2": "rgba(0, 163, 232, 1)",
        "color-3": "rgba(0, 163, 232, 0.55)",
        "color-4": "rgba(133, 211, 255, 0.6)",
        "color-5": "rgba(204, 237, 250, 1)",
        "color-6": "rgba(217, 217, 217, 1)",
        "color-7": "rgba(91,199,245,1)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        high: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        medium: "0px 4px 12px 0px rgba(0, 0, 0, 0.5)",
        low: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        secondary: "10px 10px 15px 0px #00000040",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
