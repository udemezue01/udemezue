<template>
  <div id="home" class="h-full px-18 bg-black">

    <!-- The introductory section -->

    <div class="item-center mt-32">


        
        <h1 class="text-center font-body font-black text-white sm:text-5xl lg:text-6xl"> Udemezue John </h1>

        <p class="mt-8 text-center font-body font-ordinary text-white"> The African Born Titan</p>

        <div class="flex items-center space-x-8 justify-center mt-24">

          <a class="bg-yellow-600 text-black py-3 px-4 rounded-lg font-body font-medium">
            Email
          </a>

          <a class="bg-yellow-600 text-black py-3 px-3 rounded-lg font-body font-medium">
            Twitter
          </a>

          <a class="bg-yellow-600 text-black py-3 px-3 rounded-lg font-body font-medium">
            Github
          </a>
          
        </div>

    </div>

    <!-- End of the introductory section -->

    <!-- The featured section -->

    <div class="mt-64">
    	
    <!-- 	The first flex -->

    	<div class="flex justify-between px-8 lg:px-32">
    		<div>
    			
    			<img src="/img/web.jpg" class="object-center object-cover h-18 w-18 rounded-lg hidden lg:block">

    		</div>

    		<div class="p-8 lg:w-1/2 lg:w-full">
          <h1 class="text-4xl text-white"> Web Developer.</h1>
    			<p class="mt-16 text-white">
    				

                  I design amazing websites using advanced web technology tools such as HTML, CSS, Javascript, Vue Js and Python/ Django.


    			</p>

    			<button class="mt-16 bg-yellow-600 text-black py-3 px-3 rounded-lg font-body font-medium">
            Ask Me How
          </button>

    		</div>

    	</div>

    	<!-- End of the first flex -->

    	 <!-- 	The second flex -->
    	
    	<div class="mt-32 flex justify-between px-8 lg:px-32">
    		<div class="lg:w-1/2 lg:w-full">

            <h1 class="text-white text-4xl">   Digital Marketing.</h1>

          <p class="mt-16 text-white">
            

                I am also an online marketing enthusiast, who specialize in both social media marketing <br>and search engine marketing tools like Facebook ads, Twitter ads and Google Ads.

                I also love search engine optimzation and Blogging, this is why I write passionaly about it

          </p>


    		<button class="mt-16 bg-yellow-600 text-black py-3 px-3 rounded-lg font-body font-medium">
            Talk To Me
          </button>
    			

    		</div>

    		<div>
    			
    			<img src="/img/marketing.jpg" class="object-cover object-center rounded-lg h-18 w-18 hidden lg:block">

    		</div>

    	</div>

    	<!-- End of the second flex -->



    	 <!-- 	The Third flex -->
    	
    	<div class="mt-16 flex justify-between px-8 lg:px-32">
    		<div>
    			<img src="img/entrepreneur.jpg" class="object-center object-cover rounded-lg hidden lg:block">

    		</div>

    		<div  class="p-6 lg:w-1/2 lg:w-full">

          <h1 class="text-white text-4xl">  Serial Entrepreneur.</h1>

          <p class="mt-16 text-white">
            
          
            I strongly believe in taking sole responsibility for myself and not rely on job oppotunities before I can become what I want to be in life, and this is why I choose create oppotunities for my self by becoming an entrepreneur.

          </p>
    			
    		<button class="mt-16 bg-yellow-600 text-black py-3 px-3 rounded-lg font-body font-medium">
            Ask Me How
          </button>
    			

    		</div>

    	</div>

    	<!-- End of the Third flex -->

    </div>


    <!-- End of the featured section -->

    <!-- The footer section -->

    <footer class="mt-32">
      
      <div>

        <ul class="flex justify-between text-white px-4 py-4">
          <li class="rounded-lg px-2 py-2 hover:bg-teal-600 hover:text-black "> Home</li>
          <li>contact me</li>

           <li>Github</li>
           <li>Blog</li>
           <li>Linkedn</li>
           <li>Instagram</li>
           <li>Twitter</li>
        </ul>
        

      </div>

    </footer>


   <!--  End of the footer section -->





  
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
