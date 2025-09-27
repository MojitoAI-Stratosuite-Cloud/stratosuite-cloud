import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
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
        // Stratosuite Product Colors
        "agent-purple": "hsl(var(--agent-purple))",
        "small-business-teal": "hsl(var(--small-business-teal))",
        "sales-green": "hsl(var(--sales-green))",
        "service-pink": "hsl(var(--service-pink))",
        "marketing-orange": "hsl(var(--marketing-orange))",
        "commerce-green": "hsl(var(--commerce-green))",
        "ai-blue": "hsl(var(--ai-blue))",
        "data-purple": "hsl(var(--data-purple))",
        "platform-indigo": "hsl(var(--platform-indigo))",
        "slack-purple": "hsl(var(--slack-purple))",
        "analytics-red": "hsl(var(--analytics-red))",
        "mulesoft-blue": "hsl(var(--mulesoft-blue))",
        "heroku-purple": "hsl(var(--heroku-purple))",
        "success-teal": "hsl(var(--success-teal))",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-purple": "var(--gradient-purple)",
        "gradient-blue": "var(--gradient-blue)",
        "gradient-teal": "var(--gradient-teal)",
      },
      boxShadow: {
        "card": "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        "button": "var(--shadow-button)",
      },
      transitionProperty: {
        "smooth": "var(--transition-smooth)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
