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
import { mockTeams } from '~/mock/teams'
import type { TablePages } from '~/types/table-pages'

const tablePagesData = ref<TablePages>({
  title: 'All Teams',
  createButton: {
    label: 'Add new team',
    to: '/teams/new'
  },
  dataFields: [
    {
      key: 'id',
      label: 'Id',
      sortable: false
    },
    {
      key: 'name',
      label: 'Team',
      sortable: true
    },
    {
      key: 'positions',
      label: 'Positions',
      sortable: true
    }
  ],
  data: mockTeams
})
</script>
