// tailwind.config.js
const nativewind = require('nativewind/tailwind');
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './base/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Using legacy `rgba`
        primaryColor: '#FF7F63',
        secondaryColor: '',
        whiteColor: '#FFFFFF',
        darkColor: '#161616',
        borderColor: '#DADADA',
        textColor: '#333333',
        grayColor: '#F4F5F9',
        successColor: '#09B54E',
        lightBlue: ' #DBF1FD ',
        lighterBlue: ' #F3F8FB',
        royalBlue: '#5393B8',
        normalBlue: '#4E76DE',
        lightYellow: '#FFF2EC',
        dangerColor: '#D05656',
        lightGreen: '#00ACA2',
        lightPrimaryColor: '#FFE7E1',
      },
    },
  },
  plugins: [],
  presets: [nativewind],
};
