<template>
  <div class="my-8 flex flex-col items-center gap-4 md:my-16 md:gap-8">
    <span class="text-center text-2xl font-medium md:text-4xl">{{ title }}</span>
    <div class="w-[460px] max-w-full md:w-[560px] lg:w-[800px]">
      <div class="mx-4 flex flex-col items-center gap-4 md:gap-8">
        <slot />
        <div class="flex flex-col gap-2">
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            size="md"
            :label="submitButtonLabel"
            block
            class="w-[300px]"
            :color="action === 'create' ? 'primary' : 'yellow'"
            @click="handleSubmit"
          />
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            size="md"
            label="Cancel"
            class="w-[300px]"
            block
            color="gray"
            @click="handleCancel"
          />
        </div>
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
