<template>


  <!--   The navigational bar section -->

    <nav class="bg-gray-50 flex justify-between py-3 px-6 lg:px-32 items-center shadow-sm">
      
      <div class="text-white">

        <router-link to ="/">

        <img src="/img/sunlogo.svg" class="h-9 w-9">

      </router-link>
      </div>

      <div class="flex items-center space-x-4 hidden lg:block">

        <a href="" class="capitalize font-body text-sm tracking-widest px-3 py-3 hover:bg-gray-200 rounded-md "> projects</a>

        <a href="" class="capitalize font-body text-sm tracking-widest px-3 py-3 hover:bg-gray-200 rounded-md"> resume</a>

        <a href="" class="capitalize font-body text-sm tracking-widest px-3 py-3 hover:bg-gray-200 rounded-md"> talks</a>

        <a href="" class="capitalize font-body text-sm tracking-widest px-3 py-3 hover:bg-gray-200 rounded-md"> interests</a>
        

      </div>

      

      <div class="flex items-center hidden lg:block">

        <a href="https://udemezue.hashnode.dev" class="ring-1 ring-gray-800 text-gray-800 bg-transparent px-3 py-2 font-body text-sm tracking-widest rounded-sm"> Blog</a>

      
      </div>

      <!-- The navbar toggle section -->
      <div class="lg:hidden">

        
        
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
