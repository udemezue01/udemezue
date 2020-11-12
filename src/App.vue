<template>
  <div id="app" class="bg-red-100">

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
