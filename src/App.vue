<template>
  <div id="app" class="h-full bg-white">

  	<!-- The Navigational Bar -->

  		<navbar class="sticky top-0"> </navbar>

  	<!-- End Of The Navigational Bar  -->

  	<router-view/>

  	<!-- The Footer -->

  	<footbar class="mt-32"> </footbar>


  	<!-- End Of The Footer -->

 
    
  </div>
</template>



<script >

import navbar from './components/Navbar.vue'

import footbar from './components/Footbar.vue'

export default {

components:{

	navbar,
	footbar

},

data(){

	return{


	}
},


}
	


</script>

<style>

</style>