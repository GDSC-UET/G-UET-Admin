<template>
  <div class="my-8 flex flex-col gap-4 md:my-16 md:gap-8">
    <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
      <span class="font-medium">
        <span class="text-2xl md:text-4xl">{{ name }} </span>
        <span class="md:text-xl">(v{{ version }})</span>
      </span>

      <div class="flex items-center gap-4">
        <nuxt-link to="/projects/roles" class="hidden md:flex">
          <UButton label="Edit project roles" />
        </nuxt-link>
        <nuxt-link to="/projects/roles" class="md:hidden">
          <UButton label="Edit project roles" size="xs" />
        </nuxt-link>
        <nuxt-link :to="`/projects/${id}/edit`" class="hidden md:flex">
          <UButton color="yellow" label="Edit project" />
        </nuxt-link>
        <nuxt-link :to="`/projects/${id}/edit`" class="md:hidden">
          <UButton color="yellow" label="Edit project" size="xs" />
        </nuxt-link>
        <UButton color="red" label="Delete project" class="hidden md:flex" />
        <UButton color="red" label="Delete project" class="md:hidden" size="xs" />
      </div>
    </div>
    <CommonList label="Description:" :data="formattedDescription" />
    <div>
      <span class="font-medium md:text-xl">Links:</span>
      <ul class="ml-6 list-disc">
        <li>Github: {{ github }}</li>
        <li>Product: {{ product }}</li>
      </ul>
    </div>
    <div class="flex items-center gap-4">
      <span class="font-medium md:text-xl">Contributors: {{ contributors.length }}</span>
      <nuxt-link :to="`/projects/1/contributors`" class="hidden md:flex">
        <UButton color="yellow" label="Edit contributors" />
      </nuxt-link>
      <nuxt-link :to="`/projects/1/contributors`" class="md:hidden">
        <UButton color="yellow" label="Edit contributors" size="xs" />
      </nuxt-link>
    </div>
    <UTable :columns="columns" :rows="contributors" />
    <UPagination v-model="page" :total="contributors.length" :page-count="5" class="mx-auto flex" />
  </div>
</template>

<script setup lang="ts">
import type { ProjectDetail } from '~/types/projects'

const props = defineProps<ProjectDetail>()

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
    key: 'position',
    label: 'Position'
  },
  {
    key: 'gen',
    label: 'Gen'
  },
  {
    key: 'roles',
    label: 'Roles'
  }
]
</script>
