import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "violet-6": "#7C3AED",
        "violet-1": "#EDE9FE",
        "rose-5": "#F43F5E",
        "line-3": "#BEF264",
        "amber-8": "#92400E",
        "slate-9": "#0F172A",
        "slate-8": "#1E293B",
        "state-5": "#64748B",
        "slate-4": "#94A3B8",
        "slate-3": "#CBD5E1",
        "slate-2": "#E2E8F0",
        "slate-1": "#F1F5F9",
      },
    },
  },
  plugins: [],
} satisfies Config;
