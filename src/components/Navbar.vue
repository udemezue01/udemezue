<template>


  <!--   The navigational bar section -->

    <nav class="bg-white flex justify-between py-4 px-6 lg:px-32 items-center shadow-sm">
      
      <div class="text-white">

        <router-link to ="/" class="text-3xl font-body font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">

        <img src="/img/helmet.svg" alt=""  class="h-10 w-10">
      </router-link>
      </div>

      <div class="flex items-center space-x-4 hidden lg:block text-lg">

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-gray-50 rounded-md "> Home</a>

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-gray-50 rounded-md"> About</a>

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-gray-50 rounded-md"> Portfolio</a>

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-gray-50 rounded-md"> Resume</a>
        

      </div>

      

      <div class="flex items-center space-x-3 font-body tracking-wider text-lg">

        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
          <path d="M3 6l9 6l9 -6" />
          <path d="M15 18h6" />
          <path d="M18 15l3 3l-3 3" />
        </svg>

          <span> hi@Tchelete.com</span>

      
      </div>

      <!-- The navbar toggle section -->
      <div class="lg:hidden items-center">

        <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        
      </div>

      <!-- End of the navbar toggle section -->

    </nav>

   <!--  End of the navigational bar section -->
  
    
 
</template>

<script>
export default {
  name: 'Navbar',

  data(){


    return{



    }
  }
}
</script>

</style>
