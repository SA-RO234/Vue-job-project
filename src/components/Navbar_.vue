<script setup>
import logo from "@/assets/img/vue-logo.png";
import { RouterLink, useRoute } from "vue-router";

const isActiveLink =(routePath)=>{
  const route = useRoute();
  return route.path === routePath;
}
</script>
<template>

  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class=" flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-between  ">
          <!--  logo  -->
            <RouterLink to="/" class="flex flex-shrink-0 items-center mr-4 ">
             <img :src="logo" alt="" class="h-10 w-auto ">
             <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
            </RouterLink>
           <ul class="flex justify-center space-x-10">
          <li>
             
            <RouterLink
              to ="/"
              :class="[isActiveLink('/') ? 'bg-green-900' : 'hover:bg-green-900' ,'text-slate-100', 'rounded-md','py-2','px-3']"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to ="/jobs"
              class="text-slate-100 hover:bg-green-900 rounded-md py-2 px-3"
            >
              Job
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to ="/jobs/add"
              class="text-slate-100 hover:bg-green-900 rounded-md py-2 px-3"
            >
              Add Job
            </RouterLink>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
</template>
