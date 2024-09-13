<template>
  <div class="mt-2 flex gap-1">
    <span class="text-sm md:text-base">{{ label }}</span>
    <UButton
      size="2xs"
      color="red"
      icon="i-heroicons-trash"
      :ui="{ rounded: 'rounded-full' }"
      @click="emit('delete')"
      class="h-fit"
    />
  </div>
</template>

<script setup lang="ts">
import type { SelectedOption } from '~/types/selected-option'

defineProps<SelectedOption>()

const emit = defineEmits(['delete'])
</script>
