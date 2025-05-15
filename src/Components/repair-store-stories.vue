<script setup>
import Carousel from 'primevue/carousel' // Required globally only if you want it that way

const urls = ['https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/10/30044355/Artboard_2_copy_62x-scaled.webp', 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/24095813/Techy-Company.png', 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/24095812/Savannah-iDoctor.png', 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/24095811/Computer-Repair-Doctor.png', 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/10/24095808/iFixScreens-1.png', 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2024/12/24095814/First-Response-Phone-Repair.png', 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/12092738/Latest-2-scaled.webp', 'https://cdn-ilcmnof.nitrocdn.com/fjAenfxwewwtFTNxMybfKqbnqdiodkyH/assets/images/optimized/rev-596e9ce/d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/04/15075036/Customer-Stories-franchitti_franchittis-story-scaled.jpg']

</script>

<template>
    <h1 class="text-[#333333] text-4xl text-center font-semibold mt-40 mb-20">Trusted by More Than 3,000+ Repair Stores
    </h1>
    <div class="ml-40 mr-40 mb-30">
        <Carousel :value="urls" :num-visible="2" :num-scroll="1" circular :autoplayInterval="9000">
            <template #item="slotProps">
                <div>
                    <div class="flex flex-row ml-10 justify-center">
                        <img class="w-full rounded-3xl w-full shadow-md" :src="slotProps.data" />
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>