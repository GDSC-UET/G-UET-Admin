<template>
  <div>
    <span class="text-lg font-medium">{{ label }}</span>
    <ul class="ml-6 list-disc">
      <li v-for="(item, index) in data" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { List } from '~/types/list'

defineProps<List>()
</script>
