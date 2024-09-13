<template>
  <div>
    <span class="font-medium md:text-lg">{{ label }}</span>
    <ul class="ml-6 list-disc text-sm md:text-base">
      <li v-for="(item, index) in data" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { List } from '~/types/list'

defineProps<List>()
</script>
