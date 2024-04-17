import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'brand-black': '#1a1a1a',
                'brand-white': '#ffffff',
                'brand-gray': {
                    light: '#9a9a9a',
                    neutral: '#4a4a4a',
                    dark: '#2a2a2a',
                },
                'brand-accent': '#64f5b7',
            },
        },
    },
    plugins: [],
};
export default config;
