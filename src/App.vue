<template>
  <div id="app" class="h-full bg-gray-50">

  	<!-- The Navigational Bar -->

  		<navbar> </navbar>

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