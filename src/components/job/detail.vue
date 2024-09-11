<template>
  <div class="my-16 flex flex-col gap-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="text-4xl font-medium">{{ position.name }}</span>
        <JobTag :label="tag" />
        <nuxt-link :to="`/positions/${position.id}`">
          <UButton label="View this position" size="sm" />
        </nuxt-link>
      </div>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/jobs/${id}/edit`">
          <UButton label="Edit job" color="yellow" size="sm" />
        </nuxt-link>
        <UButton label="Delete job" color="red" size="sm" />
      </div>
    </div>
    <div class="flex items-center gap-4">
      <span class="text-xl font-medium">Status: {{ isOpen ? 'Open' : 'Close' }}</span>
      <UButton v-if="isOpen" size="sm" label="Close this job" color="red" />
      <UButton v-else size="sm" label="Open this job" />
    </div>
    <CommonList label="Description:" :data="formattedDescription" />
    <span class="text-xl font-medium">Applicants: {{ applicants.length }}</span>
    <UTable :columns="columns" :rows="applicants" class="rounded-md border border-gray-200" />
    <UPagination :total="applicants.length" :page-count="5" v-model="page" class="mx-auto flex" />
  </div>
</template>

<script setup lang="ts">
import type { JobDetail } from '~/types/jobs'

const props = defineProps<JobDetail>()

const page = ref(1)

const formattedDescription = computed(() => {
  return props.description.split('\n')
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
    key: 'linkCV',
    label: 'Link CV'
  },
  {
    key: 'appliedAt',
    label: 'Applied At'
  }
]
</script>
