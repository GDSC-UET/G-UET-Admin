<template>
  <div class="mt-8 flex flex-col gap-4 md:mt-16 md:gap-8">
    <span class="mx-auto text-2xl font-medium md:text-4xl">Present award</span>
    <span class="text-base font-medium md:text-lg">{{ name }}</span>
    <AwardTag :label="type" />
    <UForm :state="state" class="flex flex-col gap-8">
      <UFormGroup label="Members">
        <USelectMenu size="md" searchable multiple v-model="selected" :options="members" />
      </UFormGroup>

      <div class="mx-auto flex flex-col gap-2">
        <UButton
          size="md"
          type="submit"
          label="Submit presenting award"
          class="w-[300px] justify-center rounded-full"
        />

        <UButton
          size="md"
          label="Cancel"
          color="gray"
          class="w-[300px] justify-center rounded-full"
        />
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { AwardDetail, AwardPresentForm } from '~/types/awards'

const props = defineProps<AwardDetail>()

const selected = ref([])

const state = reactive<AwardPresentForm>({
  id: props.id,
  members: selected.value
})

const members = [
  {
    label: 'Tran Manh Dung',
    value: '1'
  },
  {
    label: 'Bui Duc Anh',
    value: '2'
  },
  {
    label: 'Cao Xuan Dung',
    value: '3'
  }
]
</script>
