<script setup>
import Carousel from 'primevue/carousel'
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(min-width: 550px) and (max-width: 639px)')
const isMoreSmallScreen = useMediaQuery('(min-width: 400px) and (max-width: 549px)')
const fullSmallScreen = useMediaQuery('(min-width: 200px) and (max-width: 399px)')


const products = ref([
  {
    name: 'Cell Phone Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14063934/Phone-Repair-scaled-1.webp',
    description: 'Create repair tickets, mark rush jobs, order cell phone parts, and automate your inventory management process.'
  },
  {
    name: 'Computer Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064104/computer-repair-scaled-1.webp',
    description: 'Track your computer repair jobs, keep customers informed, and grow your business with marketing automation.'
  },
  {
    name: 'Jewelry Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064306/Jewelarry-Repair.webp',
    description: 'Organize your jewelry repair/retail operations, select pre-conditions, and send invoices via a payment link.'
  },
  {
    name: 'Drone Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064519/drone-repair-scaled-1.webp',
    description: 'Keep track of every drone repair job, take customer notes, and integrate with your online store inventory.'
  },
  {
    name: 'Mail-in Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/01/14064620/mail-in-repair-scaled-1.webp',
    description: 'Digitize your end-to-end repair workflow using custom features, built specifically for mail-in repair businesses.'
  },
  {
    name: 'Bicycle Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/02/19120413/bicycle-image.png',
    description: 'Boost your bicycle repair efficiency with a point of sale and ticket management system, all in one place.'
  },
  {
    name: 'Power Tools Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/02/19120935/power-tool-repair.png',
    description: 'Automate inventory management, payment alerts, and employee tracking with power tools repair shop software.'
  },
  {
    name: 'Camera Repair',
    image: 'https://d1v4k1xgetr2r1.cloudfront.net/rd-cdn/2025/05/12073445/camera-being-repaired-1.jpg',
    description: 'Automate your camera repair shop’s workflow by streamlining repairs, inventory, and payments all in one place.'
  }
])

const responsiveOptions = ref([
  {
    breakpoint: '1600px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '1280px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '450px',
    numVisible: 1,
    numScroll: 1
  }
])

const autoplayInterval = 4000
</script>

<template>
  <div :style="{marginTop: isSmallScreen ? '30%' : isMoreSmallScreen ? '85%' : fullSmallScreen ? '300%' : '60px'}" class="bg-[#FAF9E3] mt-auto py-16 px-4">
    <h1 class="text-5xl text-center font-semibold text-[#404040] mb-6">Industries We Serve</h1>
    <p class="text-[#333333] text-[21px] mb-10 text-center max-w-4xl mx-auto">
      RepairDesk offers total repair control with an end-to-end workflow tailored for your entire repair business in one place.
    </p>

    <div class="max-w-[1600px] mx-auto">
      <Carousel
        :value="products"
        :numVisible="4"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :autoplayInterval="autoplayInterval"
      >
        <template #item="slotProps">
          <div class="flex flex-col items-center text-center px-3">
            <img
              :src="slotProps.data.image"
              alt="Product Image"
              class="rounded-3xl w-full h-[280px] object-cover mb-6"
            />
            <h4 class="text-2xl font-bold text-[#333333] mb-4">{{ slotProps.data.name }}</h4>
            <p class="text-[#333333] text-lg">{{ slotProps.data.description }}</p>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.p-carousel-content) {
  padding: 0 1rem;
}
::v-deep(.p-carousel-item) {
  display: flex;
  justify-content: center;
}
</style>
