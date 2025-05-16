<script setup>

const props = defineProps(['title', 'img', 'description'])

</script>

<template>

    <div class="w-full flex flex-row justify-center">
        <div class="flex flex-col lg:flex-row-reverse max-w-[1600px] mx-auto mt-10 px-5">
  <!-- Text Section -->
  <div class="w-full lg:w-1/2 flex flex-col justify-center p-5">
    <h1 class="text-4xl text-[#333333] font-normal mb-5">{{ props.title }}</h1>
    <p class="text-lg text-[#333333]">
      {{ props.description }}
    </p>
  </div>

  <!-- Image Section -->
  <div class="w-full lg:w-1/2 flex justify-center p-5">
    <img :src="props.img" class="max-w-full h-auto" />
  </div>
</div>

    </div>
    <div class="flex flex-row justify-center">
        <button
            class="mt-15 bg-[#134E4A] p-3 text-white font-semibold hover:scale-115 transition delay-150 duration-300 ease-in-out cursor-pointer mb-14 rounded-[30px] w-34 self-center">Get
            Started</button>
    </div>
</template>