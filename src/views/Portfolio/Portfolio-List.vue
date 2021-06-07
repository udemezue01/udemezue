<template>
	
	<div class="px-6 lg:px-32 h-screen">

		<section class="mt-24">

			

		<ul v-for="portfolio in portfolios" :key ="portfolio.id" class="grid grid-cols-3">
			
			<li class="text-gray-900">{{portfolio.id}}</li>

		</ul>
			

		
			


		</section>
		

	</div>


</template>


<script>

import { mapState, mapGetters} from 'vuex';

export default {


computed:{

	...mapState(['portfolios']),
},

created(){
		

	this.$store.dispatch('portfolioList');

	
	}

}
	


</script>