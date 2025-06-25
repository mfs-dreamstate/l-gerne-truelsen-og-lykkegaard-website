/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        primary: '#28b6e6',
        secondary: '#3571b1',
        'trust-light': '#f0f8ff',
        'trust-medium': '#e1f3ff',
        'professional-gray': '#64748b',
        'subtle-gray': '#f8fafc',
      },
      animation: {
        'medical-float': 'medical-float 6s ease-in-out infinite',
        'trust-glow': 'trust-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        'medical-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)' 
          },
        },
        'trust-glow': {
          '0%, 100%': { 
            boxShadow: '0 8px 32px rgba(40, 182, 230, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 12px 40px rgba(40, 182, 230, 0.2)' 
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        'shimmer': {
          '0%': { 
            backgroundPosition: '-200% 0' 
          },
          '100%': { 
            backgroundPosition: '200% 0' 
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}