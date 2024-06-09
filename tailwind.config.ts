import config from "next/config";
module.exports = {
  mode: 'jit',
  purge: [
    './app/**/*.tsx',
    './app/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
