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
        <div class="w-full flex justify-center bg-[#134E4A] py-10">
  <div class="flex flex-col xl:flex-row p-12 w-full max-w-[1600px]">
    <!-- Left side -->
    <div class="w-full xl:w-1/2 flex flex-col">
      <div class="flex flex-wrap p-2">
        <h1 class="font-serif text-5xl font-bold bg-gradient-to-r from-amber-300 to-white text-transparent bg-clip-text">
          All-in-One
        </h1>
        <h1 class="font-serif text-5xl font-bold text-white">&nbsp;Repair Shop</h1>
      </div>
      <h1 class="font-serif text-5xl font-bold text-white">&nbsp;Management Software</h1>
      <p class="text-white text-[18px] mt-5">
        #1 Cloud-based Point of Sale Repair Shop Software and Unified Communication Ecosystem to manage and grow your Repair Business.
      </p>
      <div class="mt-10 flex gap-5">
        <button class="transition duration-300 text-[15px] text-[#134E4A] p-[10px] w-[170px] bg-white rounded-full font-semibold hover:scale-110">
          Start My Free Trial
        </button>
        <button class="transition duration-300 border-white text-white w-[120px] p-[10px] font-semibold rounded-full border hover:scale-110">
          See Pricing
        </button>
      </div>
    </div>

    <!-- Right side (image) -->
    <div class="w-full xl:w-1/2 mt-10 xl:mt-0">
      <img class="w-full h-auto" src="https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/11/26071944/2e23d752b0a445840ceb41b9f98d9772.webp" />
    </div>
  </div>
</div>

        <div class="flex flex-row p-15 text-center w-full h-auto items-center justify-center">
            <p class="text-[#404040] text-[18px] font-medium font-sans">Powered by a Suite of 40+ Integrated Partners
            </p>
        </div>
        <div class="w-full flex flex-row justify-center">
            <div
            class="flex gap-10 w-full max-w-[1600px] flex-row no-scrollbar whitespace-nowrap overflow-hidden .no-scrollbar pb-10 h-auto w-full pl-10 pr-10 h-31 mx-10px h-25">
            <div class="gap-10 whitespace-nowrap flex flex-row animate-scroll-left">
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