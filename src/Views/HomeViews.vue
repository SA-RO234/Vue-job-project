<script setup>
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCard.vue";
import JobListings from "@/components/Joblistings.vue";
</script>

<template>
  <Hero
    title="Become a Vue Dev "
    subtitle="Fine the Vue job that fits your skills and needs"
  />
  <HomeCard />
  <JobListings :limit="3" :showButton="true" />
</template>
