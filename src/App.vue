<script setup>

import Header from './layout/header.vue';
import FreeTrailBanner from './Components/free-trail-banner.vue';
import MainBainer from './Components/mainBainer.vue';
import RepairIndustries from './Components/repair-industries.vue';
import RepairStoreStories from './Components/repair-store-stories.vue';
import ShopManagmentControl from './Components/RepairDeskShopManagment/shopManagmentControl.vue';
import UnifiedCommunication from './Components/unifiedCommunication.vue';
import Footer from './layout/footer.vue';

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
    <Header />
    <MainBainer />
    <ShopManagmentControl />
    <template>
        <div class="bg-red-500 xs:bg-green-500 sm:bg-blue-500 text-white p-4">
            Resize screen and observe background color
        </div>
    </template>
    <UnifiedCommunication />
    <div class="flex flex-row w-full justify-center">
        <div class="mt-30 gap-20 mb-20 flex w-full max-w-[1600px] 2xl:mb-20 xl:mb-20 lg:mb-65 md:mb-65 sm:mb-65 flex-wrap flex-row justify-center h-32">
            <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[0]" alt="Failed to load image">
            <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[1]" alt="Failed to load image">
            <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[2]" alt="Failed to load image">
            <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[3]" alt="Failed to load image">
            <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[4]" alt="Failed to load image">
            <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[5]" alt="Failed to load image">
        </div>
    </div>
    <RepairIndustries />
    <RepairStoreStories />
    <FreeTrailBanner />
    <Footer />
</template>
