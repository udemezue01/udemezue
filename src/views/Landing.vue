<template>
  <div id="home" class="bg-gray-50">


    <!-- The introductory section -->
    <transition name="fade">

    <section class="xl:flex flex-wrap mt-32 px-6 lg:px-32 space-x-64">

      <div class="space-y-10  ">

        <h1 class="font-body text-gray-800 tracking-wider font-extrabold text-4xl text-center lg:text-left"> Hi, I'm Udemezue John</h1>
        
        
        <p class="text-xl leading-relaxed font-body tracking-widest text-gray-700 font-medium text-center lg:text-left"> 
            An enthusiastic web developer  with a rich experience <br>in Web development, & Digital Marketer
          
           </p>
      

            <!-- The social Media section -->

          <div class="flex justify-center lg:justify-start space-x-8 items-center mx-auto">
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


        <div class="flex justify-center lg:justify-start items-center space-x-6 mt-12">

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

        <div class="h-full hidden xl:block">
          <img src="/img/udemezue.jpeg" class=" ring-8 ring-green-700 ring-opacity-90 object-center object-cover h-80 w-80 rounded-full hidden lg:block ">

        </div>

    </section>


    <!-- End of the introductory section -->


     <!-- The about me section -->

    </transition>
    <section class="text-gray-600 font-body">
  <div class="container px-5 lg:px-24 py-24 mx-auto ">
    <div class="flex flex-col text-center w-full mb-20 space-y-4">
      <h2 class="text-xs text-red-500 tracking-wider font-medium mt-4">SKILLSET</h2>
      <h1 class="sm:text-3xl text-2xl font-medium tracking-wider text-gray-900"> I have developed myself in various Fields</h1>
    </div>

    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col justify-items-center">
          <div class="flex items-center mb-3 space-y-4">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
    

              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h2 class="text-gray-900 text-lg font-medium"> Web Development</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base tracking-wider"> I am a full-stack developer who develops user interfaces using technologies like VUe JS, React Js, Taiwinds CSS and Django.</p>
            <a class="mt-3 text-red-500 inline-flex font-body tracking-wider items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3 space-y-4">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google h-5 w-5"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
            </svg>
            </div>
            <h2 class="text-gray-900 text-lg tracking-wider font-medium">Digital Marketing</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed tracking-wider text-base">

            I have developed my self in practical digital Marketing such as the mastery of SEO, SEM and Social Media ads
          </p>
            <a class="mt-3 text-red-500 font-body tracking-wider inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3 space-y-4">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-writing-sign h-5 w-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5" />
          <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
          <path d="M16 7h4" />
        </svg>
            </div>
            <h2 class="text-gray-900 text-lg font-medium">Blogger</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed  tracking-wider text-base"> I create amazing contents cuts accross various niches, including Digital Marketing, SEO, Technical things and so many.</p>
            <a class="mt-3 text-red-500 inline-flex font-body items-center tracking-wider">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



</transition>


    <!-- End of the about me section -->


      <!-- The Blog section starts -->

    <section class="text-gray-600 font-body">

      <!-- The Blog intro section starts -->


       <div class="flex flex-col text-center w-full mb-20 space-y-4">
      <h2 class="text-xs text-red-500 tracking-wider font-medium font-body mt-4">PORTFOLIO</h2>
      <h1 class="sm:text-3xl text-2xl font-medium font-body tracking-wider text-gray-900"> Here are some of the works done by me</h1>
    </div>


      <!-- The Blog Intro section ends -->


  <div class="container px-5 lg:px-24 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

        <!-- Heading of the card starts -->
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
          <!-- Body of the card  -->
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 tracking-wider">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3 tracking-wider">The Catalyzer</h1>
            <p class="leading-relaxed mb-3 tracking-wider">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
        
            </div>
          </div>
        </div>
      </div>

      <!-- The heading of the card ends -->
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- The Blog section ends -->

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