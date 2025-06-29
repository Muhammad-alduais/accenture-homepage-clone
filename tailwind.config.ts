import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // Brand Colors
        brand: {
          primary: {
            DEFAULT: '#4942E4',
            50: '#F0EFFF',
            100: '#E6E4FF',
            200: '#D1CDFF',
            300: '#B8B1FF',
            400: '#9B8FFF',
            500: '#4942E4',
            600: '#3D37C7',
            700: '#322CAA',
            800: '#27218D',
            900: '#1C1670'
          },
          accent: {
            DEFAULT: '#00D1B2',
            50: '#E6FFF9',
            100: '#CCFFF3',
            200: '#99FFE7',
            300: '#66FFDB',
            400: '#33FFCF',
            500: '#00D1B2',
            600: '#00A78E',
            700: '#007D6A',
            800: '#005346',
            900: '#002923'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      },
      mixBlendMode: {
        'plus-lighter': 'plus-lighter',
      },
      fontFamily: {
        'arabic': ['Tajawal', 'Inter', 'system-ui', 'sans-serif'],
        'english': ['Inter', 'system-ui', 'sans-serif'],
        'logo': ['Glacial Indifference', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'rtl': '0 0 0 auto',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.rtl\\:space-x-reverse > * + *': {
          '--tw-space-x-reverse': '1',
        },
        '.rtl\\:flex-row-reverse': {
          'flex-direction': 'row-reverse',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
} satisfies Config;