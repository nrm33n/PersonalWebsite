module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], layers: ["base", "utilities"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      //had to add here bc eslint kept cleaning it in ygo.js LMAOOO
      'ygo-bg': "url('https://i.imgur.com/DNVGE5B.png')",
    },
    extend: {},
    /*colors: {
      'emerald': '#013328'
    }*/
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}