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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // Only needed if you're using ShadCN UI
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1650px",
      },
    },
  },
  plugins: [],
};

export default config;
