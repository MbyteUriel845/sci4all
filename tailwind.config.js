/** @type {import('tailwindcss').Config} */

  module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {






      'primary':'#fff', //strong blue
      'secondary':'#419197 ', // --blue
      'accent':'#143f6b ', //---cyan
      'content':'#1d408d ',//--yellow
      'base':'#23395B',//--little pink
      //---- custom ----
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}

