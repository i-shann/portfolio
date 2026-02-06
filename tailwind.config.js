/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // make sure your files are included here
  ],
  theme: {
    extend: {
      colors: {
        primary: '#725CAD',  // your custom purple
      },
    },
  },
  plugins: [],
};
