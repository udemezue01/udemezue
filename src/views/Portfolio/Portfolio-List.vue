<template>
	
	<div class="px-6 lg:px-32">

		<section class="mt-24">

			

		<ul v-for="portfolio in portfolios" class="grid grid-cols-3">
			
			<li>{{portfolio.title}}</li>

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