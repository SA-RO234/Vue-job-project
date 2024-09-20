<script setup>
   import { defineProps } from 'vue';

   defineProps({
    mybg :{
     type : String,
     default : 'bg-gray-100'
    }
  });
</script>

<template>
     <div :class="`${mybg} p-6 rounded-lg shadow-md`">
        <slot>This is fall back </slot> 
     </div>
</template>