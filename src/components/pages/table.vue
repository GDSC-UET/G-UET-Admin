<template>
  <div class="mt-16 flex flex-col gap-8">
    <div class="flex w-full items-center justify-between">
      <span class="text-2xl font-medium">{{ title }}</span>
      <nuxt-link :to="createButton.to">
        <UButton size="md" icon="i-heroicons-pencil-square" :label="createButton.label" />
      </nuxt-link>
    </div>
    <div class="flex w-full items-center justify-end gap-4">
      <USelect placeholder="Search on" v-model="searchField" :options="fieldOptions" />
      <UInput
        v-model="searchQuery"
        :ui="{ rounded: 'rounded-full' }"
        class="relative w-[290px]"
        icon="i-heroicons-magnifying-glass"
        placeholder="Search..."
        @keyup.enter="handleSearch"
      />
    </div>
    <UTable :columns="dataFields" :rows="data" />
    <UPagination v-model="page" :total="10" class="mx-auto flex" :page-count="5" />
  </div>
</template>

<script setup lang="ts">
import type { TablePages } from '~/types/table-pages'

const props = defineProps<TablePages>()

const searchQuery = ref<string>('')
const searchField = ref<string>('')
const page = ref(1)

const emit = defineEmits<{
  (e: 'search', query: string, field: string, page: number): void
}>()

watch(page, (newValue) => {
  emit('search', searchQuery.value, searchField.value, newValue)
})

const handleSearch = () => {
  emit('search', searchQuery.value, searchField.value, page.value)
}

const fieldOptions = computed(() => {
  return props.dataFields.map((field) => {
    return {
      label: field.label,
      value: field.key
    }
  })
})
</script>
