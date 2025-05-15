<script setup>

import InjuredGadgers from '@/assets/injured gadgers.png';
import M360 from '@/assets/m360.png';
import MobileNZO from '@/assets/mobile nzo.png';
import MobileSentrix from '@/assets/mobileSentrix.png';
import PhoneLcdParts from '@/assets/phone lcd parts.png';
import QuickBooks from '@/assets/quickbooks.png';
import Rusely from '@/assets/rusely.png';
import ShipStation from '@/assets/ship station.png';
import Shopify from '@/assets/shopify.png';
import Square from '@/assets/square.png';
import Woo from '@/assets/woo.png';
import Xero from '@/assets/xero.png';
import Zaiper from '@/assets/zaiper.png';

</script>

<template>

    <div>
        <div class="h-150 bg-[#134E4A]">
            <div class="flex flex-row p-12 h-40 w-[100%]">
                <div class="flex w-[80%] flex-col mt-30">
                    <div class="flex flex-row w-[650px] h-auto p-2">
                        <h1
                            class="text-wrap font-serif text-5xl font-bold bg-gradient-to-r from-amber-300 to-white text-transparent bg-clip-text">
                            All-in-One
                        </h1>
                        <h1 class="font-serif text-5xl font-bold text-white"> &nbsp;Repair Shop</h1>
                    </div>
                    <h1 class="w-[650px] font-serif text-5xl font-bold text-white">&nbsp;Management Software</h1>
                    <p class="w-[650px] text-white text-[18px] mt-5">#1 Cloud-based Point of Sale Repair Shop Software
                        and
                        Unified Communication Ecosystem to manage and grow your Repair Business.</p>
                    <div class="mt-10 flex gap-5 flex-row">
                        <button
                            class="transition delay-150 duration-300 ease-in-out text-[15px] h-auto text-[#134E4A] cursor-pointer p-[10px] w-[170px] bg-white rounded-[30px] font-semibold hover:scale-110">Start
                            My Free Trail</button>
                        <button
                            class="transition delay-150 duration-300 ease-in-out border-white h-auto text-white w-[120px] p-[10px] font-semibold cursor-pointer rounded-[30px] bg-transparent border-1 hover:scale-110">See
                            Pricing</button>
                    </div>
                </div>
                <!-- for image -->
                <div class="h-auto w-[20%] w-full">
                    <img class="h-[750%] w-full"
                        src="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/11/26071944/2e23d752b0a445840ceb41b9f98d9772.webp" />
                </div>
            </div>

        </div>
        <div class="flex flex-row p-15 text-center w-full h-auto items-center justify-center">
            <p class="text-[#404040] text-[18px] font-medium font-sans">Powered by a Suite of 40+ Integrated Partners
            </p>
        </div>
        <div
            class="flex gap-10 flex-row no-scrollbar whitespace-nowrap overflow-hidden .no-scrollbar pb-10 overflow-x-auto h-auto w-full pl-10 pr-10 h-31 mx-10px h-25">
            <div class="gap-10 flex flex-row animate-scroll-left">
                <img class="w-72 h-17" :src="InjuredGadgers" />
                <img :src="M360" class="w-72 h-17" />
                <img :src="MobileNZO" class="w-30 h-7 mt-5" />
                <img :src="MobileSentrix" class="w-72 h-17" />
                <img :src="PhoneLcdParts" class="w-40 h-6 mt-7" />
                <img :src="QuickBooks" class="w-60 h-12 mt-4" />
                <img :src="Rusely" class="w-60 h-17 mt-1" />
                <img :src="ShipStation" class="w-45 h-12 mt-3" />
                <img :src="Shopify" class="w-62 h-14 mt-2" />
                <img :src="Square" class="w-60 h-15 mt-3" />
                <img :src="Woo" class="w-60 h-14 mt-3" />
                <img :src="Xero" class="w-60 h-14 mt-3" />
                <img :src="Zaiper" class="w-60 h-15 mt-4" />
            </div>
        </div>
        
    </div>
</template>

<!-- 
apply change effect on same component


<div class="flex justify-center items-center h-screen">
            <div class="group relative w-64 h-64 bg-blue-500 p-4">
                <div class="text-white font-bold text-xl group-hover:hidden">
                    Hover me to change content!
                </div>
                <div
                    class="absolute top-0 left-0 w-full h-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                    <span class="text-white font-bold text-2xl">I appear on hover!</span>
                </div>
            </div>
        </div>
-->