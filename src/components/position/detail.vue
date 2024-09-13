<template>
  <div class="my-8 flex flex-col gap-4 md:my-16 md:gap-8">
    <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
      <div class="flex items-center gap-4">
        <span class="text-2xl font-medium md:text-4xl">{{ name }}</span>
        <nuxt-link :to="`/jobs/${id}`" class="hidden md:flex">
          <UButton label="View job for this position" size="sm" />
        </nuxt-link>
        <nuxt-link :to="`/jobs/${id}`" class="md:hidden">
          <UButton label="View job for this position" size="xs" />
        </nuxt-link>
      </div>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/positions/${id}/edit`" class="hidden md:flex">
          <UButton label="Edit job" color="yellow" size="sm" />
        </nuxt-link>
        <nuxt-link :to="`/positions/${id}/edit`" class="md:hidden">
          <UButton label="Edit job" color="yellow" size="xs" />
        </nuxt-link>
        <UButton label="Delete job" color="red" size="sm" class="hidden md:flex" />
        <UButton label="Delete job" color="red" size="xs" class="md:hidden" />
      </div>
    </div>
    <CommonList label="Responsibilities:" :data="formattedResponsibilities" />
    <span class="font-medium md:text-xl">Members: {{ members.length }}</span>
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
