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
import { mockPositions } from '~/mock/positions'
import type { TablePages } from '~/types/table-pages'

const tablePagesData = ref<TablePages>({
  title: 'All Positions',
  createButton: {
    label: 'Add new position',
    to: '/positions/new'
  },
  dataFields: [
    {
      key: 'id',
      label: 'Id',
      sortable: false
    },
    {
      key: 'name',
      label: 'Position',
      sortable: true
    },
    {
      key: 'team',
      label: 'Team',
      sortable: true
    },
    {
      key: 'description',
      label: 'Description',
      sortable: false
    },
    {
      key: 'members',
      label: 'Members',
      sortable: true
    }
  ],
  data: mockPositions
})
</script>
