module.exports = {
  content: [

  
    "./src/**/*.{html,js,vue}",
    "./views/**/*.{vue}"

 
  ],
  theme: {

  	fontFamily:{

  	'body':['DM Sans']

  	},
    extend: {},
  },
  variants: {},
  plugins: [

    require('@tailwindcss/line-clamp'),
  ],
}
