<template>
	
	<div  class="px-6 lg:px-32 h-screen">


	<section class="mt-24 grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-12" >

		<!-- 	The card section starts-->
		
			<div v-for ="portfolio in allPortfolios" :key="portfolio.id" class="bg-white rounded-md shadow w-full h-full">

			<img :src="portfolio.image" alt="" class="object-center object-cover w-full">

				<!-- The card footer section starts-->

				<div class="space-y-8 p-3">
					<h1 class="text-gray-800 text-lg tracking-wider font-body"> {{portfolio.title}}</h1>

					<p class="text-gray-600 text-md tracking-wider font-body">{{portfolio.about}}</p>

					<button class="px-3 py-3 tracking-wider font-body bg-gray-800 text-white rounded-md focus:outline-none">Details</button>	
				</div>
					
					
				<!-- The card footer section ends -->
					

			</div>		
	
		<!-- The card section Ends -->
			

		</section>
		

	</div>


</template>


<script>

import { mapGetters} from 'vuex';

export default {


computed:{

	...mapGetters(['allPortfolios']),
},

created(){
		

	this.$store.dispatch('portfolioList');

	
	}

}
	


</script>