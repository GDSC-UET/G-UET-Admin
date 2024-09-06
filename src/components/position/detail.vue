<template>
  <div class="my-16 flex flex-col gap-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="text-4xl font-medium">{{ name }}</span>
        <nuxt-link :to="`/jobs/${id}`">
          <UButton label="View job for this position" size="sm" />
        </nuxt-link>
      </div>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/positions/edit/${id}`">
          <UButton label="Edit job" color="yellow" size="sm" />
        </nuxt-link>
        <UButton label="Delete job" color="red" size="sm" />
      </div>
    </div>
    <div>
      <span class="text-xl font-medium">Responsibilities</span>
      <ul class="ml-6 list-disc">
        <li v-for="(item, index) in formattedResponsibilities" :key="index">{{ item }}</li>
      </ul>
    </div>
    <span class="text-xl font-medium">Members: {{ members.length }}</span>
    <UTable :columns="columns" :rows="members" class="rounded-md border border-gray-200" />
    <UPagination :total="members.length" :page-count="5" v-model="page" class="mx-auto flex" />
  </div>
</template>

<script setup lang="ts">
import type { PositionDetail } from '~/types/positions'

const props = defineProps<PositionDetail>()

const page = ref(1)

const formattedResponsibilities = computed(() => {
  return props.responsibilities.split('\n')
})

const columns = [
  {
    key: 'id',
    label: 'Id'
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'position',
    label: 'Position'
  },
  {
    key: 'gen',
    label: 'Gen'
  },
  {
    key: 'school',
    label: 'School'
  }
]
</script>
