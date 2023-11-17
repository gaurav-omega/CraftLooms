/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        cl : {
          bgPrimary : "#232528",
          bgSecondary: "#EAF6FF",
          button: '#FFA400',
          textPrimary: "#EAF6FF",
          buttonH: "#815200",
          text2: "#001121",
          outline: '#7bd0ff'
        }
       }
    },
     
  },
  plugins: [],
}

