
<template>
    <nav
      class="w-full h-[64px] mx-auto py-4  bg-[#0d0a2e]   flex justify-between items-center" 
    >
      <div class="flex items-center w-[45%] px-10 ">
        <router-link :to="{ name: 'home' }">
          <div class="w-[62px] mr-10">
            <img src="@/assets/images/logo.png" class="w-full h-full" alt="logo" />
          </div>
        </router-link>
  
        <ul class="hidden md:flex flex-grow items-center list-none mt-1">
            <li class="text-base ml-8 font-normal text-white">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li><li class="text-base ml-8 font-normal text-white">
            <router-link :to="{ name: 'courses' }">Courses</router-link>
          </li>
          <!-- <li class="text-base font-normal text-white">
            <a href="#">Pricing</a>
          </li> -->
          <li class="text-base ml-8 font-normal text-white">
            <router-link :to="{ name: 'about' }">About Us</router-link>
          </li>
          <li class="text-base ml-8 font-normal text-white">
            <router-link :to="{ name: 'service' }">Services</router-link>
          </li>
          <li class="text-base ml-8 font-normal text-white">
            <router-link :to="{ name: 'contact' }">Contact us</router-link>
          </li>
        </ul>
      </div>
      <div class="hidden md:flex justify-end px-10">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSftSzVpk1_sMrISg-X1b9d9jypGMzGqmy3i8ksc6uM0l4alyg/viewform?usp=sf_link"
							class=" text-white text-center  "><p class="border outline-white w-[150px] mx-auto p-2  rounded-3xl">Get in touch</p></a> 
      </div>
  
      <div class="flex justify-end md:hidden w-full px-0 pr-8" @click="toggle">
        <div v-if="isToggled"> <img src="@/assets/images/close.png"></div>
          <div v-else ><img src="@/assets/images/menu.png" /></div>
      </div>
    </nav>
  
    <div
          class="fixed top-0 left-0 h-screen w-[200px] bg-white transform transition-transform ease-in-out duration-300 z-50 "
          :class="{ '-translate-x-full': !isToggled, 'translate-x-0': isToggled }"
        >
        <ul class="flex flex-col flex-grow items-left pl-4 pt-10 gap-8 list-none mt-1">
            <li class="text-base ml-8 font-normal text-black">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="text-base ml-8 font-normal text-black">
            <router-link :to="{ name: 'about' }">About Us</router-link>
          </li>
          <li class="text-base ml-8 font-normal text-black">
            <router-link :to="{ name: 'courses' }">Courses</router-link>
          </li>
          <li class="text-base ml-8 font-normal text-black">
            <router-link :to="{ name: 'service' }">Service</router-link>
          </li>
          <li class="text-base ml-8 font-normal text-black">
            <router-link :to="{ name: 'contact' }">Contact us</router-link>
          </li>
        
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSftSzVpk1_sMrISg-X1b9d9jypGMzGqmy3i8ksc6uM0l4alyg/viewform?usp=sf_link"
							class=" text-white text-center mt-8 "><p class="bg-[#09132a] w-[150px] mx-auto p-4 mt-1 rounded-3xl">Get in touch</p></a> 
          </li>
        </ul>
      </div>
   
  </template>
  <script>
  export default {
    data(){
      return{
        isToggled: false,
      };
    },
  
        methods: {
          toggle(){
          this.isToggled = !this.isToggled
  
          },
        },
  }
  </script>
  <style></style>
  