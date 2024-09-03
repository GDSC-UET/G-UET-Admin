<template>
  <div class="my-16 flex flex-col items-center gap-8">
    <span class="text-4xl font-medium">{{ title }}</span>
    <div class="flex w-[800px] flex-col items-center gap-8">
      <slot />
      <div class="flex flex-col gap-2">
        <UButton
          :ui="{ rounded: 'rounded-full' }"
          size="lg"
          :label="submitButtonLabel"
          block
          class="w-[300px]"
          :color="action === 'create' ? 'primary' : 'yellow'"
          @click="handleSubmit"
        />
        <UButton
          :ui="{ rounded: 'rounded-full' }"
          size="lg"
          label="Cancel"
          class="w-[300px]"
          block
          color="gray"
          @click="handleCancel"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormPages } from '~/types/form-pages'

defineProps<FormPages>()

const emit = defineEmits(['submit', 'cancel'])

const handleSubmit = () => {
  emit('submit')
}

const handleCancel = () => {
  emit('cancel')
}
</script>
