<template>
  <div class="my-8 flex flex-col gap-4 text-ellipsis md:my-16 md:gap-8">
    <div class="flex flex-col justify-between gap-2 md:gap-4 lg:flex-row lg:items-center">
      <div class="flex items-center gap-4">
        <span class="text-2xl font-medium md:text-4xl">{{ position.name }}</span>
        <JobTag :label="tag" />
      </div>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/positions/${position.id}`" class="hidden md:flex">
          <UButton label="View this position" size="sm" />
        </nuxt-link>
        <nuxt-link :to="`/positions/${position.id}`" class="md:hidden">
          <UButton label="View this position" size="xs" />
        </nuxt-link>
        <nuxt-link :to="`/jobs/${id}/edit`" class="hidden md:flex">
          <UButton label="Edit job" color="yellow" size="sm" />
        </nuxt-link>
        <nuxt-link :to="`/jobs/${id}/edit`" class="md:hidden">
          <UButton label="Edit job" color="yellow" size="xs" />
        </nuxt-link>
        <UButton label="Delete job" color="red" size="sm" class="hidden md:flex" />
        <UButton label="Delete job" color="red" size="xs" class="md:hidden" />
      </div>
    </div>
    <div class="flex items-center gap-4">
      <span class="text-base font-medium md:text-xl">Status: {{ isOpen ? 'Open' : 'Close' }}</span>
      <UButton v-if="isOpen" size="sm" label="Close this job" color="red" class="hidden md:flex" />
      <UButton v-if="isOpen" label="Close this job" color="red" size="xs" class="md:hidden" />
      <UButton v-else size="sm" label="Open this job" class="hidden md:flex" />
      <UButton v-else label="Open this job" size="xs" class="md:hidden" />
    </div>
    <CommonList label="Description:" :data="formattedDescription" />
    <span class="font-medium md:text-xl">Applicants: {{ applicants.length }}</span>
    <div class="max-w-full">
      <UTable
        :columns="columns"
        :rows="applicants"
        class="max-xw-full overflow-x-scroll rounded-md border border-gray-200"
      />
    </div>
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
