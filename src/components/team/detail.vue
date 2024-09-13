<template>
  <div class="my-8 flex flex-col gap-4 md:my-16 md:gap-8">
    <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
      <div class="flex items-center gap-4">
        <span class="text-2xl font-medium md:text-4xl">{{ name }}</span>
        <nuxt-link :to="`/teams/${id}/positions`" class="hidden md:flex">
          <UButton label="Add position for this team" />
        </nuxt-link>
        <nuxt-link :to="`/teams/${id}/positions`" class="md:hidden">
          <UButton label="Add position for this team" size="xs" />
        </nuxt-link>
      </div>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/temas/${id}/edit`" class="hidden md:flex">
          <UButton label="Edit team" color="yellow" size="sm" />
        </nuxt-link>
        <nuxt-link :to="`/temas/${id}/edit`" class="md:hidden">
          <UButton label="Edit team" color="yellow" size="xs" />
        </nuxt-link>
        <UButton label="Delete team" color="red" size="sm" class="hidden md:flex" />
        <UButton label="Delete team" color="red" size="xs" class="md:hidden" />
      </div>
    </div>
    <CommonList label="Description:" :data="formattedDescription" />
    <UTable :columns="columns" :rows="positions" />
    <UPagination class="mx-auto flex" :total="positions.length" :page-count="5" v-model="page" />
  </div>
</template>

<script setup lang="ts">
import type { TeamDetail } from '~/types/teams'

const props = defineProps<TeamDetail>()

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
    key: 'position',
    label: 'Position'
  },
  {
    key: 'description',
    label: 'Description'
  },
  {
    key: 'members',
    label: 'Members',
    sortable: true
  }
]
</script>
