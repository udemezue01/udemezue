<template>
  <div class="">

  <!--   The navigational bar section -->

    <div class="bg-black flex justify-between py-4 px-4 items-center shadow-sm">
      
      <div class="text-white">

        <span class="text-yellow-600 text-2xl"> udemezue </span>
      </div>

      <div class="block lg:hidden">

        <h1> This is a heading</h1>
        
      </div>

      <div class="hidden lg:block">
        
        <ul class = "text-white list-none flex items-center justify-between space-x-3"> 

        <li> About me</li>
         <li> Projects</li>

      </ul>

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
