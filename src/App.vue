<template>
  <div id="app" class="h-screen bg-gray-50">

  	<navbar> </navbar>

    <router-view/>
  </div>
</template>

<style>

</style>

<script >

import navbar from './components/Navbar.vue'

export default {

components:{

	navbar,

},

data(){

	return{


	}
},


}
	


</script>
