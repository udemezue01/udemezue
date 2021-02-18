<template>
	
	<div class="px-6 lg:px-32">

		<section class="mt-24" >

			<ul  v-for ="port in portfolios" class="list-none flex sm:grid-cols-1 lg:grid-cols-3 gap-4 ">

				<li class="w-1/3 rounded-lg overflow-hidden"> 


				<img src="/img/udemezue.jpg" class="object-center object-cover h-42 w-42 ">

				<!-- The card body section -->

				<div class="mt-6 p-4 ">
					
					<h1 class="font-body text-gray-900">{{port.title}}</h1>

					<p class="font-body text-gray-600"> {{port.about}}</p>
				</div>

				<!-- End of the card body section -->

				<!-- The card footer section -->

				<div class="mt-8">

					<button>Details</button>
					
				</div>

				<!-- End of the card footer section -->

				</li>


				


			</ul>




		
			


		</section>
		

	</div>


</template>


<script>

import { mapState } from 'vuex';

export default {


computed:{

	...mapState(['portfolios']),

	},

created(){
		this.$store.dispatch('portfolioList');
	
	}

}
	


</script>