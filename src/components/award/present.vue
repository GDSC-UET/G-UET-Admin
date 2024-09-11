<template>
  <div class="mt-16 flex flex-col gap-8">
    <span class="mx-auto text-4xl font-medium">Present award</span>
    <span class="text-lg font-medium">{{ name }}</span>
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
