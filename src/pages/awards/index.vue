<template>
  <UContainer>
    <PagesTable
      :title="tablePagesData.title"
      :create-button="tablePagesData.createButton"
      :data-fields="tablePagesData.dataFields"
      :data="tablePagesData.data"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockAwards } from '~/mock/awards'
import type { TablePages } from '~/types/table-pages'

const tablePagesData = ref<TablePages>({
  title: 'All Awards',
  createButton: {
    label: 'Add new award',
    to: '/awards/new'
  },
  dataFields: [
    {
      key: 'id',
      label: 'Id',
      sortable: false
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true
    }
  ],
  data: mockAwards
})
</script>
