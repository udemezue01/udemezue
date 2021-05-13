<template>
  <div class="">

  <!--   The navigational bar section -->

    <div class="bg-gray-50 flex justify-between py-4 px-6 lg:px-32 items-center shadow">
      
      <div class="text-white">

        <router-link to ="/">

        <img src="/img/helmet.svg" class="h-9 w-9">

      </router-link>
      </div>

      

      <div class="flex items-center">

        <a href="https://udemezue.hashnode.dev" class="ring-1 ring-gray-800 text-gray-800 bg-transparent px-3 py-2 font-body font-medium tracking-widest rounded-sm"> Blog</a>

        
    

      </div>

    </div>

   <!--  End of the navigational bar section -->
  
    
  </div>
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
