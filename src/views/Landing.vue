<template>
  <div id="home" class="bg-gray-50">

    <!-- The introductory section -->
    <transition name="fade">

    <div class="flex mt-32 px-6 lg:px-32 space-x-64 items-center">

      <div class="w-full lg:w-1/2 space-y-10">

        <h1 class="font-body text-gray-800 text-justify tracking-wider font-extrabold text-4xl"> Hello, I am Udemezue John<br> </h1>
        
        
        <p class="text-3xl font-body tracking-widest text-gray-700 font-medium"> 
            I am an enthusiastic web developer  with a rich experience in Web development, Digital Marketing & Product Design.
          
           </p>

      

            <!-- The social Media section -->

          <div class="flex space-x-8 items-center">
        <a href=""> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook h-8 w-8 rounded-full hover:bg-red-300"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg></a>
        <a href="https://Twitter.com/_udemezue">
          
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter h-8 w-8 rounded-full hover:bg-red-300"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
</svg>
        </a>
        <a href="https://github.com/udemezue01">
          
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github h-8 w-8 rounded-full hover:bg-red-300"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>
        </a>
      

      </div>

    <!--   end of the social media section -->

    <!-- Call to action section starts -->


        <div class="flex items-center space-x-6 mt-12">

          <router-link to="/portfolio"class="bg-gray-800 text-white py-3 px-4 font-body font-medium inline-flex space-x-2 rounded-md">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>

            <span class="font-body tracking-widest">
                Projects
            </span>
          
          </router-link>

          <a class="bg-red-600 text-white  py-3 px-3 font-body font-medium inline-flex space-x-2 rounded-md">

            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            <span class="font-body tracking-widest"> Hire Me</span>
          </a>

      

      </div>

      <!-- Call to action ends -->

          
        </div>

        <div class="h-full hidden lg:block">
          <img src="/img/udemezue.jpg" class=" ring-8 ring-gray-800 ring-opacity-90 object-center object-cover h-80 w-80 rounded-full hidden lg:block ">

        </div>

    </div>

    <!-- End of the introductory section -->

    </transition>

    <!-- The about me section -->
  <transition name="fade">

<section class="mt-12 px-6 lg:px-24 ">


  
  <div class="bg-white space-y-6 rounded-lg shadow p-4 lg:p-8">


        <h2  class=" text-3xl tracking-widest font-body text-gray-900">What I do.</h2>

        <!-- The grid section -->

        <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-24">

          <!-- The card section -->
        <div class="p-2 space-y-10">


    <!-- The Icon section -->
        <div class="block"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-chrome h-12 w-12 stroke-current text-red-600" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="9" x2="20.4" y2="9" />
            <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />
            <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" />
          </svg>

        </div>
<!-- End of the Icon section -->

<h3 class="text-gray-800 font-body tracking-wider text-xl"> Web Development </h3>

    <!-- The description section -->

    <div class="block"> 
      <p class="tracking-wider font-body text-gray-700">
        
      I am a full-stack developer who develops user interfaces using technologies like VUe JS, React Js, Taiwinds CSS and Django
      </p>
    </div>


    <!-- End of the description section -->
        </div>

  <!-- End of the card section -->


        <!-- The card section -->
        <div class="p-2 space-y-10">


    <!-- The Icon section -->
        <div class="block"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-chrome h-12 w-12 stroke-current text-red-600" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="9" x2="20.4" y2="9" />
            <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />
            <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" />
          </svg>

        </div>
<!-- End of the Icon section -->

<h3 class="text-gray-800 font-body tracking-wider text-xl"> Digital Marketing </h3>

    <!-- The description section -->

    <div class="block"> 
      <p class="tracking-wider font-body text-gray-700">
        
      I am a full-stack developer who develops user interfaces using technologies like VUe JS, React Js, Taiwinds CSS and Django
      </p>
    </div>


    <!-- End of the description section -->
        </div>

  <!-- End of the card section -->




        <!-- The card section -->
        <div class="p-2 space-y-10">


    <!-- The Icon section -->
        <div class="block"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-chrome h-12 w-12 stroke-current text-red-600" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="9" x2="20.4" y2="9" />
            <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />
            <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" />
          </svg>

        </div>
<!-- End of the Icon section -->

<h3 class="text-gray-800 font-body tracking-wider text-xl"> Web Developer </h3>

    <!-- The description section -->

    <div class="block"> 
      <p class="tracking-wider font-body text-gray-700">
        
      I am a full-stack developer who develops user interfaces using technologies like VUe JS, React Js, Taiwinds CSS and Django
      </p>
    </div>


    <!-- End of the description section -->
        </div>

  <!-- End of the card section -->

        </div>

        <!-- End of the grid section -->

    
    
    
    </div>

    <!-- The section nav ends -->

  

    

</section>

</transition>




    <!-- End of the about me section -->

     <!-- Hype section -->

     <section class="mt-12 px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-2">

      <div class="bg-white space-y-12 p-12 lg:p-24">
          
          <h1 class="text-6xl font-body tracking-wider"> I Build Stuffs.</h1>


          <p class="text-3xl font-body tracking-wider text-gray-700"> Take a sneakpeak of my projects</p>

          <button class="ring-1 ring-gray-800 text-gray-800 bg-transparent px-3 py-3 font-body tracking-widest rounded-sm ">See My Work </button>

      </div>

      <div class=" bg-white space-y-12 p-12 lg:p-24">
        

          <h1 class="text-6xl font-body tracking-wider"> I Write For The Future.</h1>


          <p class="text-3xl font-body tracking-wider text-gray-700"> Take a sneakpeak Of What My Articles Look Like</p>

          <button class="ring-1 ring-gray-800 text-gray-800 bg-transparent px-3 py-3 font-body tracking-widest rounded-sm">Read My Articles </button>

      </div>
       


     </section>



     <!-- End Of The Hype Section -->
    






  
  </div>
</template>


<style scoped>

.fade-enter-active{
        transition: opacity 1.5s;
    }
    .fade-leave-active {
        opacity: 0;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>