import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: ['src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				lg: '2rem',
				xl: '3rem'
			}
		},
		extend: {
			colors: {
				midnight: '#010104',
				manta: '#0A1C2E',
				lagoon: '#0D3B4C',
				foam: '#dbe7ec',
				gold: '#f7c948'
			},
			fontFamily: {
				sans: ['"Porsche Next"', 'Inter', ...defaultTheme.fontFamily.sans]
			},
			boxShadow: {
				glow: '0 30px 80px -20px rgba(15, 80, 120, 0.45)'
			}
		}
	}
};

export default config;
