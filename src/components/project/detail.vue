<template>
  <div class="my-16 flex flex-col gap-8">
    <div class="flex items-center justify-between">
      <span class="font-medium"">
        <span class="text-4xl">{{ name }} </span>
        <span class="text-xl">(v{{ version }})</span>
      </span>

      <div class="items-center flex gap-4">
        <nuxt-link to="/projects/roles">
          <UButton label="Edit project roles" />
        </nuxt-link>
        <nuxt-link :to="`/projects/edit/${id}`">
          <UButton color="yellow" label="Edit project" />
        </nuxt-link>
        <UButton color="red" label="Delete project" />
      </div>
    </div>
    <CommonList label="Description:" :data="formattedDescription" />
    <div>
      <span class="text-xl font-medium">Links:</span>
      <ul class="list-disc ml-6">
        <li>Github: {{ github }}</li>
        <li>Product: {{ product }}</li>
      </ul>
    </div>
    <div class="flex items-center gap-4">
      <span class="text-xl font-medium">Contributors: {{ contributors.length }}</span>
      <nuxt-link :to="`/projects/1/contributors`">
        <UButton color="yellow" label="Edit contributors" />
      </nuxt-link>
    </div>
    <UTable :columns="columns" :rows="contributors" />
    <UPagination v-model="page" :total="contributors.length" :page-count="5" class="flex mx-auto" />
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
  },
]
</script>
