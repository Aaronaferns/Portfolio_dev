/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-black':'#212A31',
        'custom-dark':'#2E3944',
        'custom-blue':'#124E66',
        'custom-light-blue':'#748D92',
        'custom-beige':'#D3D9D4',
      }
    },
  },
  plugins: [],
};
