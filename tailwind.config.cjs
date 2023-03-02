/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	important: true,
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			green: {
				one: '#519A70',
				two: '#498B65',
				three: '#417b5a',
				four: '3C7354',
				five: '386A4E'
			},
			dark: {
				one: '#333333',
				two: '#292929',
				three: '#1c1c1c',
				four: '#141414',
				five: '#0A0A0A'
			},
			platinum: {
				one: '#F5F6F4',
				two: '#EAECE9',
				three: '#DADDD8',
				four: '#D6D9D3',
				five: '#CBDOC8'
			},
			alabaster: {
				two: '#F7F6F3',
				three: '#ECEBE4',
				four: '#E6E4DB',
				five: '#DDDBCF'
			},
			flash: {
				one: '#EEF0F2',
				two: '#E8EBED',
				three: '#DCE0E4',
				four: '#D1D6DC',
				five: '#C5CCD3'
			},
			ghost: '#FAFAFF'
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serif: ['Gloock', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
