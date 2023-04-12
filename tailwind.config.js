/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                darkGray: 'rgb(36, 36, 36)',
                primaryOrange: '#F7AB0A',
                darkerGray: 'rgb(51, 51, 51)',
            },
        },
    },
    plugins: [],
};
