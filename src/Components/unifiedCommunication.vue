<script setup>

import MultiChannel from '@/assets/multi-channel.PNG'
import IntegratedPhoneSystem from '@/assets/integrated phone system.PNG';
import AppoinmentSchedule from '@/assets/appoinment-schedule.PNG';

const urls = [
    'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/26111436/3-2.png',
    'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/26111453/1-2.png',
    'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/26132819/Software_suggest_badge.png',
    'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08093715/Capterra-Badge.png',
    'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/08093555/2-2.png',
    'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/26111542/TrustPilot-Badge.png',
]

</script>

<template>

    <div class="flex flex-col">
        <div class="flex flex-row justify-center">
            <h1 class="text-[#404040] text-center text-[45px] font-[500] mt-13 mb-6">Unified Communication Ecosystem
            </h1>
        </div>
        <p class="ml-40 mr-40 text-[22px] text-center text-[#404040]">A Unified Communication Ecosystem integrated with
            RepairDesk to manage all your calls,
            emails, texts, website queries and social media messages in one place.</p>
        <div class="flex flex-row flex-center 3xl:justify-center 4xl:justify-center 5xl:justify-center 6xl:justify-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center xs:justify-center">
            <div class="flex flex-wrap gap-[10px] h-auto w-full mx-auto max-w-[1600px] md:flex-wrap xs:flex-wrap sm:flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex-row mt-15 ml-15 mr-15">
                <!-- For Image 1 -->
                <div class="group relative flex flex-row justify-center md:w-full sm:w-full xs:w-full 2xl:h-[35%] xl:h-[35%] lg:h-[35%] md:h-[10%] sm:h-[15%] w-auto">
                    <img style="height: fit-content;" class="group-hover" :src="MultiChannel" />
                    <div
                        class="absolute h-[285%] bg-black/75 top-0 left-0 w-full opacity-0 group-hover:opacity-200 transition-opacity flex-col rounded-[16px] flex justify-center items-center pb-0 pt-10 pl-10 pr-10">
                        <img height="20%" width="50%" class="self-start h-[150px] 2xl:h-[150px] xl:h-[120px] md:h-[120px] sm:h-[90px] w-[150px] 2xl:w-[150px] xl:w-[120px] md:w-[120px] sm:w-[90px]"
                            src="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/11/26071940/Artboard_3_copy.png" />
                        <p class="text-white sm:mt-0 md:mt-0 mt-3 text-[19px] md:text-[12px] sm:text-[10px] xl:text-[14px]">
                            One inbox for multi-channel communication and review management
                        </p>
                        <div class="flex flex-row gap-2 sm:mt-2 md:mt-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px] font-normal">Manage inquiries from Facebook</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white text-[15px] xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] font-normal">Two-way conversations with SMS chat</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white text-[15px] xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] font-normal">Sync business account emails</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white text-[15px] xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] font-normal">More reviews with Review Automation</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white text-[15px] xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] font-normal">Respond to Google Reviews</p>
                        </div>
                        <button
                            class="cursor-pointer bg-[#134E4A] w-35 hover:scale-110 transition delay-150 duration-300 ease-in-out text-white font-semibold rounded-[26px] self-start mb-7 md:p-0 sm:p-0 p-3 mt-5">Learn
                            More</button>
                    </div>
                </div>
                <!-- For Image 2 -->
                <div class="group relative flex flex-row justify-center md:w-full sm:w-full xs:w-full 2xl:h-[35%] xl:h-[35%] lg:h-[35%] md:h-[10%] sm:h-[15%] w-auto">
                    <img style="height: fit-content;" class="group-hover" :src="IntegratedPhoneSystem" />
                    <div
                        class="absolute h-[285%] bg-black/75 top-0 left-0 w-full opacity-0 group-hover:opacity-200 transition-opacity flex-col rounded-[16px] flex justify-center items-center pb-0 pt-10 pl-10 pr-10  ">
                        <img class="self-start h-[150px] 2xl:h-[150px] xl:h-[120px] md:h-[120px] sm:h-[90px] w-[150px] 2xl:w-[150px] xl:w-[120px] md:w-[120px] sm:w-[90px]" 
                            src="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/11/26071940/Artboard_1_copy.png" />
                        <p class="text-white sm:mt-0 md:mt-0 mt-3 md:text-[12px] sm:text-[10px] xl:text-[14px] text-[19px]">
                            Integrated phone system for taking more calls and booking more jobs
                        </p>
                        <div class="flex flex-row gap-2 w-full sm:mt-2 md:mt-2 mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Single business number for calls & SMS</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Call alerts with ticket information</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Custom IVR, greetings, & office hours</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Missed calls, call logs, and recordings</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Port in your existing number</p>
                        </div>
                        <button
                            class="cursor-pointer bg-[#134E4A] w-35 hover:scale-110 transition delay-150 duration-300 ease-in-out text-white font-semibold rounded-[26px] self-start mb-7 p-3 mt-5">Learn
                            More</button>
                    </div>
                </div>
                <!-- For Image 3 -->
                <div class="2xl:h-[35%] flex flex-row justify-center md:w-full sm:w-full xs:w-full xl:h-[35%] lg:h-[35%] md:h-[10%] sm:h-[15%] cursor-pointer relative group w-auto">
                    <img style="height: fit-content;" class="group-hover" :src="AppoinmentSchedule" />
                    <div
                        class="absolute bg-black/75 top-0 left-0 w-full h-[285%] opacity-0 group-hover:opacity-200 transition-opacity flex-col rounded-[16px] flex justify-center items-center pb-0 pt-10 pl-10 pr-10  ">
                        <img class="self-start" height="250px" width="250px"
                            src="https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/source/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/11/26071940/Artboard_4_copy-2048x270.png" />
                        <p class="text-white sm:mt-0 md:mt-0 mt-3 md:text-[12px] sm:text-[10px] xl:text-[14px] text-[19px]">
                            Customizable widget for convenient appointment scheduling in RepairDesk
                        </p>
                        <div class="flex flex-row gap-2 sm:mt-2 md:mt-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Easy to use and fully integrated</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Optimized for all screen sizes</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Multi-location support</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Automated online repair quotes</p>
                        </div>
                        <div class="flex flex-row gap-2 w-full mt-5 items-center justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p class="text-white xl:text-[12px] lg:text-[10px] md:text-[8px] sm:text-[8px] text-[15px]">Auto-fill information for appointments</p>
                        </div>
                        <button
                            class="cursor-pointer bg-[#134E4A] w-35 hover:scale-110 transition delay-150 duration-300 ease-in-out text-white font-semibold rounded-[26px] self-start mb-10 p-3 mt-5">Learn
                            More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
