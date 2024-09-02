<template>
  <div class="flex gap-1">
    <span>{{ label }}</span>
    <UButton size="2xs" color="red" icon="i-heroicons-trash" :ui="{ rounded: 'rounded-full' }" />
  </div>
</template>

<script setup lang="ts">
import type { SelectedOption } from '~/types/selected-option'

defineProps<SelectedOption>()

const emit = defineEmits<{
  (e: 'delete'): void
}>()
</script>
