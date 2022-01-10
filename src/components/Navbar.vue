<template>


  <!--   The navigational bar section -->

    <nav class="bg-gray-50 flex justify-between py-4 px-6 lg:px-32 items-center shadow-sm">
      
      <div class="text-white">

        <router-link to ="/" class="text-3xl font-body font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">

     Udemezue
      </router-link>
      </div>

      <div class="flex items-center space-x-4 hidden lg:block">

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-red-200 rounded-md "> projects</a>

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-red-200 rounded-md"> resume</a>

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-red-200 rounded-md"> talks</a>

        <a href="" class="capitalize font-body text-md tracking-widest px-3 py-3 hover:bg-red-200 rounded-md"> interests</a>
        

      </div>

      

      <div class="flex items-center hidden lg:block">

        <a href="https://udemezue.hashnode.dev" class="bg-red-600 text-white px-4 py-3 font-body text-sm tracking-widest rounded-md"> Blog</a>

      
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
