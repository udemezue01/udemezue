module.exports = {
  content: [

  
    "./src/**/*.{html,js,vue}",
    "./views/**/*.{vue}"

 
  ],
  theme: {

  	fontFamily:{

  	'body':['Manrope']

  	},
    extend: {},
  },
  variants: {},
  plugins: [

    require('@tailwindcss/line-clamp'),
  ],
}
