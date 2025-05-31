// // import type { Config } from "tailwindcss";

// const config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         "3xl": "1650px", // This enables 3xl screen size
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // or './src/**/*.{js,ts,jsx,tsx}' if you're using /src
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // for shadcn
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1650px", // 👈 add your custom screen size here
      },
    },
  },
  plugins: [],
};
