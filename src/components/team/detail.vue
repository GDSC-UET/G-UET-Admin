<template>
  <div class="my-16 flex flex-col gap-8">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="text-4xl font-medium">{{ name }}</span>
        <nuxt-link :to="`/teams/${id}/positions`">
          <UButton label="Add position for this team" />
        </nuxt-link>
      </div>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/temas/${id}/edit`">
          <UButton label="Edit team" color="yellow" size="sm" />
        </nuxt-link>
        <UButton label="Delete team" color="red" size="sm" />
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
