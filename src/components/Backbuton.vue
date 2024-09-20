<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <div class="container py-6 m-auto px-6">
      <RouterLink
        to="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <font-awesome-icon :icon="['faR', 'circle-left']" class="mr-3" /> Back
        to Job listings</RouterLink
      >
    </div>
  </section>
</template>
