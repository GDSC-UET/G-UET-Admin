<template>
  <div class="mt-4 flex flex-col gap-4 md:mt-16 md:gap-8">
    <div class="flex w-full items-center justify-between">
      <span class="text-lg font-medium md:text-2xl">{{ title }}</span>
      <nuxt-link v-if="createButton" :to="createButton.to">
        <UButton
          size="md"
          icon="i-heroicons-pencil-square"
          :label="createButton.label"
          class="hidden md:flex"
        />
        <UButton
          size="sm"
          icon="i-heroicons-pencil-square"
          :label="createButton.label"
          class="md:hidden"
        />
      </nuxt-link>
    </div>
    <div class="flex w-full items-center justify-end gap-4">
      <USelect placeholder="Search on" v-model="searchField" :options="fieldOptions" />
      <UInput
        v-model="searchQuery"
        :ui="{ rounded: 'rounded-full' }"
        class="relative md:w-[290px]"
        icon="i-heroicons-magnifying-glass"
        placeholder="Search..."
        @keyup.enter="handleSearch"
      />
    </div>
    <UTable
      :columns="dataFields"
      :rows="data"
      class="overflow-x-scroll rounded-md border border-gray-200"
    />
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
