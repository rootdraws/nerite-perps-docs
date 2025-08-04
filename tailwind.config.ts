/**
 * Tailwind CSS Configuration
 *
 * This file configures Tailwind CSS for the application:
 * - Sets up dark mode support
 * - Defines content paths for Tailwind to scan for class usage
 * - Extends the default theme with custom colors, border radius, animations, etc.
 * - Configures plugins
 *
 * The color palette includes custom amber/honey tones and other brand colors.
 */

import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        amber: {
          DEFAULT: "#B8860B", // Dark goldenrod - rich amber color
          dark: "#8B4513", // Dark amber brown
          resin: "#5E2605", // Dark reddish-brown
          deep: "#040706", // Deep black-brown
          rich: "#5B1707", // Rich dark brown
          warm: "#CF5E02", // Warm amber
          golden: "#D87E0A", // Golden amber
          light: "#DC940F", // Light golden amber
        },
        brand: {
          teal: "#8EAEB6", // Hero banner teal
          cocoa: "#5E2605", // Cocoa text / border
          mustard: "#DC940F", // Mustard accent
          orange: "#FF8C42", // Bright orange accent / hover
          green: "#1A3E2D", // Logo green
          cream: "#FFF5E1", // Light cream background
          peach: "#FFE5B4", // Soft peach background
        },
        black: "#0A0A0A", // Very dark background
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
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        'eight-bit': ['EightBitDragon', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
