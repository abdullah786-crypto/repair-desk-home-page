<script setup>

import Header from './layout/header.vue';
import MainBainer from './view/mainBainer.vue';
import RepairIndustries from './view/repair-industries.vue';
import RepairStoreStories from './view/repair-store-stories.vue';
import ShopManagmentControl from './view/shopManagmentControl.vue';
import UnifiedCommunication from './view/unifiedCommunication.vue';

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
    <UnifiedCommunication />
    <div class="mt-120 gap-20 ml-50 mb-20 flex flex-row h-32 overflow-x-auto">
        <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[0]" alt="Failed to load image">
        <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[1]" alt="Failed to load image">
        <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[2]" alt="Failed to load image">
        <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[3]" alt="Failed to load image">
        <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[4]" alt="Failed to load image">
        <img class="cursor-pointer flex-shrink-0 h-full" :src="urls[5]" alt="Failed to load image">
    </div>
    <RepairIndustries />
    <RepairStoreStories />
</template>
