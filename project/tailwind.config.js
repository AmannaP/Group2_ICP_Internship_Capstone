/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eeeffd',
          100: '#dee0fc',
          200: '#c0c3f8',
          300: '#9ea1f5',
          400: '#7f82f2',
          500: '#6366f1', // Primary color
          600: '#4f51c9',
          700: '#3c3ea1',
          800: '#2e2f7a',
          900: '#232452',
        },
        secondary: {
          50: '#e6f7f7',
          100: '#cdeeee',
          200: '#9de0de',
          300: '#6dcecc',
          400: '#2fb8b4',
          500: '#0d9488', // Secondary color
          600: '#0a766d',
          700: '#085752',
          800: '#053a37',
          900: '#031d1b',
        },
        accent: {
          50: '#fef7e9',
          100: '#feefd2',
          200: '#fddfa6',
          300: '#fccf79',
          400: '#fbbf4d',
          500: '#f59e0b', // Accent color
          600: '#c47b08',
          700: '#935c06',
          800: '#623d04',
          900: '#311e02',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};