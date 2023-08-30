<template>
    <div class="relative h-[300px]">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center"
            style="background-image: linear-gradient(45deg, #071f67d7, #071f67d8, rgba(32, 72, 201, 0.869), rgba(8, 20, 112, 0.711)), url(https://i.huffpost.com/gen/1289343/images/o-162256001-facebook.jpg);">
        </div>

        <!-- Overlay -->

        <!-- Content -->
        <div class="absolute inset-0 flex flex-col items-center justify-center mx-auto ">
            <h1 class="text-white text-[40px] md:text-[80px] font-semibold ">CONTACT US</h1>
        </div>
    </div>

    <div class="lg:flex mt-14 ">
        <div class="pl-4 md:pl-[150px]">
            <form action="https://formspree.io/f/xbjvonpy" method="POST">
                <div class="md:flex">
                   <div>
                    <label>
                    First name:
                </label><br>

                    <input type="text" name="name" class="border border-[#8e888884] p-2 rounded-[5px] w-[300px]">
                   </div>
               <div>

                <label class="mt-8 md:ml-[80px]">
                    Last Name:
                </label><br>

                    <input type="text" name="lastname"  class="border bg-white border-[#8e888884] p-2 rounded-[5px]  md:ml-[80px] w-[300px]">
               </div>
                </div>
<div class="mt-6">
    
    <label >
                    Email:</label><br>
                    <input type="email" name="email"  class="border border-[#8e888884] p-2 rounded-[5px] w-[300px] md:w-[700px]">
                <br>
                <br>
                <label class="mt-6">
                    Your message:</label><br>
                    <textarea name="message" class="border border-[#8e888884] p-2 rounded-[5px] w-[300px] md:w-[700px] h-[200px]"></textarea>
</div>
                <!-- your other form fields go here -->
                <button type="submit" class="bg-[#0f0f36]  text-white  px-20 py-2 mt-10 rounded-md">Send</button>
            </form>
        </div>
        <div class="pl-4 md:pl-[150px] mt-10 md:mt-0">
            <div class="flex">
                <div>
                <img src="@/assets/images/viber.png" class="w-[25px] md:w-[50px]"/>
                </div>
                <div>
                    <p class="ml-6 ">+234 90937248116</p>
                    <p class="ml-6 ">+234 90937248116</p>
                    <p class="ml-6 ">+234 90937248116</p>
                </div>
            </div>
            <div class="flex mt-5">
                <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" class="w-[25px] md:w-[50px]"/>
                <p class="ml-6 p-1">infohmglumch@gmail.com</p>
            </div>
            <div class="flex mt-5">
                <div>
                <img src="@/assets/images/home.png" class="w-[35px] md:w-[50px]"/>

                </div>
                <div>
                <p class="ml-6 p-1 w-[230px] md:w-[250px]">54 Ogoja Road, Abakaliki, Ebonyi State, Nigeria, 480101</p>

                </div>
            </div>
        </div>
    </div>

    <div style="background-color:#4d5dfb;
	background-image: linear-gradient(315deg, #4d5dfb 0%, #08c8f6 74%);" class="p-12 mt-20">
   <p class="text-center text-white text-[25px] md:text-[35px] font-[600]">
      Lets you Explore the Best. Contact Us Now
   </p>
   	<a href="https://docs.google.com/forms/d/e/1FAIpQLSftSzVpk1_sMrISg-X1b9d9jypGMzGqmy3i8ksc6uM0l4alyg/viewform?usp=sf_link"
							class=" text-white text-center mt-8 "><p class="border outline-white w-[150px] mx-auto p-4 mt-8 rounded-3xl">Get in touch</p></a> 
				
</div> 

</template>