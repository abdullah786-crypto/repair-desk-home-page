<script setup>

import Carousel from 'primevue/carousel';
import { ref } from 'vue';

const products = ref([
    {
        name: 'Cell Phone Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14063934/Phone-Repair-scaled-1.webp',
        description: ' Create repair tickets, mark rush jobs, order cell phone parts, and automate your inventory management process. '
    },
    {
        name: 'Computer Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064104/computer-repair-scaled-1.webp',
        description: ' Track your computer repair jobs, keep customers informed, and grow your business with marketing automation.'
    },
    {
        name: 'Jewelry Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064306/Jewelarry-Repair.webp',
        description: ' Organize your jewelry repair/retail operations, select pre-conditions, and send invoices via a payment link.'
    },
    {
        name: 'Drone Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064519/drone-repair-scaled-1.webp',
        description: ' Keep track of every drone repair job, take customer notes, and integrate with your online store inventory. '
    },
    {
        name: 'Mail-in Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064620/mail-in-repair-scaled-1.webp',
        description: ' Digitize your end-to-end repair workflow using custom features, built specifically for mail-in repair businesses.  '
    },
    {
        name: 'Bicycle Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/02/19120413/bicycle-image.png',
        description: 'Boost your bicycle repair efficiency with a point of sale and ticket management system, all in one place.'
    },
    {
        name: 'Power Tools Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/02/19120935/power-tool-repair.png',
        description: ' Automate inventory management, payment alerts, and employee tracking with power tools repair shop software. '
    },
    {
        name: 'Camera Repair',
        image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/05/12073445/camera-being-repaired-1.jpg',
        description: 'Automate your camera repair shop’s workflow by streamlining repairs, inventory, and payments all in one place.'
    }
])

</script>
<template>
    <div class="bg-[#FAF9E3] h-200 w-full">
        <h1 class="pt-15 text-5xl text-center font-semibold text-[#404040]">Industries We Serve</h1>
        <p class="text-[#333333] text-[21px] mt-8 text-center">RepairDesk offers total repair control with an end-to-end
            workflow tailored for your entire repair business in one place.</p>
        <div class="p-15">
            <Carousel :value="products" :numVisible="4" :numScroll="2" circular :autoplayInterval="6000">
                <template #item="slotProps">
                    <div class="w-auto max-h-[32%] ml-10">
                        <img :src="slotProps.data.image" class="rounded-3xl max-h-[280px] min-w-[280px] min-h-[280px] mb-2" />
                        <h4 class="mb-1 mt-8 ml-2 mb-7 text-center text-2xl font-bold text-[#333333]">{{ slotProps.data.name }}</h4>
                        <p class="text-[#333333] text-center text-xl">{{ slotProps.data.description }}</p>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>