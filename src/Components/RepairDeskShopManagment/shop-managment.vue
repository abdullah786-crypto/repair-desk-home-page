<script setup>

const props = defineProps(['title', 'img', 'description'])

</script>

<template>

    <div class="ml-35 mr-35 mt-10 flex flex-row h-auto">
        <!-- Image container -->
        <div class="h-100 w-[50%]">
            <img :src="props.img" />
        </div>
        <div class="flex flex-col w-[50%]">
            <h1 class="text-4xl text-[#333333] font-normal mt-10 ml-5 mb-5">{{ props.title }}</h1>
            <p class="ml-5 text-wrap text-lg text-[#333333]">
                {{ props.description }}
            </p>
        </div>
    </div>
    <div class="flex flex-row justify-center">
        <button class="mt-15 bg-[#134E4A] p-3 text-white font-semibold hover:scale-115 transition delay-150 duration-300 ease-in-out cursor-pointer rounded-[30px] w-34 self-center">Get Started</button>
    </div>
</template>