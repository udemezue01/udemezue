<template>
  <div id="home" class="h-screen px-18">

    <!-- The introductory section -->

    <div class="item-center mt-32">

      <p class="text-center font-body font-ordinary"> My name Is</p>
        
        <h1 class="text-center font-body font-black sm:text-5xl lg:text-6xl"> Udemezue John </h1>

        <p class="text-center font-body font-ordinary"> I am an African Born Titan</p>

        <div class="flex items-center space-x-8 justify-center mt-24">

          <button class="bg-red-600 text-white py-3 px-3 rounded-lg font-body font-medium">
            Talk To Me
          </button>

          <button>
            Twitter
          </button>

          <button>
            Whats app
          </button>
          
        </div>

    </div>

    <!-- End of the introductory section -->

    <!-- The featured section -->

    <div class="mt-16">
    	
    <!-- 	The first flex -->

    	<div class="flex justify-between px-32">
    		<div>
    			
    			<img src="" class="object-center object-cover">

    		</div>

    		<div class="p-8">
          <h1 class="text-4xl"> Web Developer.</h1>
    			<p>
    				

                  I design amazing websites using advanced web technology tools such as HTML, CSS, Javascript, Vue Js and Python/ Django.


    			</p>

    			<button class="bg-red-600 text-white py-3 px-3 rounded-lg font-body font-medium">
            Ask Me How
          </button>

    		</div>

    	</div>

    	<!-- End of the first flex -->

    	 <!-- 	The second flex -->
    	
    	<div class="flex justify-between px-32">
    		<div>

            <h1>   Digital Marketing.</h1>

          <p>
            

                I am also an online marketing enthusiast, who specialize in both social media marketing and search engine marketing tools like Facebook ads, Twitter ads and Google Ads.

                I also love search engine optimzation and Blogging, this is why I write passionaly about it

          </p>


    		<button class="bg-red-600 text-white py-3 px-3 rounded-lg font-body font-medium">
            Talk To Me
          </button>
    			

    		</div>

    		<div>
    			
    			<img src="" class="object-cover object-center">

    		</div>

    	</div>

    	<!-- End of the second flex -->



    	 <!-- 	The Third flex -->
    	
    	<div class="flex justify-between px-32">
    		<div>
    			<img src="" class="object-center object-cover">

    		</div>

    		<div  class="p-6 ">

          <h1 class="font-black">  Serial Entrepreneur.</h1>

          <p>
            
          
            I strongly believe in taking sole responsibility for myself and not rely on job oppotunities before I can become what I want to be in life, and this is why I choose create oppotunities for my self by becoming an entrepreneur.

          </p>
    			
    		<button class="bg-red-600 text-white py-3 px-3 rounded-lg font-body font-medium">
            Ask Me How
          </button>
    			

    		</div>

    	</div>

    	<!-- End of the Third flex -->

    </div>


    <!-- End of the featured section -->


  
  </div>
</template>

<script>
// @ is an alias to /src

// import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    // Navbar
  },

  data(){

  	return{


  	}
  }
}
</script>
