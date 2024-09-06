<template>
  <div class="my-16 flex flex-col gap-8">
    <div class="flex items-center justify-between">
      <span class="text-4xl font-medium">{{ name }}</span>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/awards/edit/${id}`">
          <UButton label="Edit award" color="yellow" />
        </nuxt-link>

        <UButton label="Delete award" color="red" />
      </div>
    </div>
    <AwardTag :label="type" />
    <div>
      <span class="text-xl font-medium">Description:</span>
      <ul class="ml-6 list-disc">
        <li v-for="(item, index) in formattedDescription" :key="index">{{ item }}</li>
      </ul>
    </div>
    <span class="text-xl font-medium"> Owners: {{ formattedOwners }} </span>
    <nuxt-link :to="`/awards/${id}/present`">
      <UButton label="Present this award" color="yellow" />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { AwardDetail } from '~/types/awards'

const props = defineProps<AwardDetail>()

const formattedDescription = computed(() => {
  return props.description.split('\n')
})

const formattedOwners = computed(() => {
  return props.owners.map((element) => element.name).join(', ')
})
</script>
