<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
   <section class="text-center flex flex-col justify-center item-center h-96">
      <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="text-yellow-500 text-7xl mb-5" />
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist </p>
      <RouterLink 
       to="/"
       class="w-[100px] m-auto text-white bg-green-700 hover:bg-green-700 rounded-md px-3 py-2 mt-4"
      >
         Go Back 
      </RouterLink>
   </section>
</template>