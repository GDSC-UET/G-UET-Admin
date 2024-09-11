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
import type { TablePages } from '~/types/table-pages'
import { mockJobs } from '~/mock/jobs'

const tablePagesData = ref<TablePages>({
  title: 'All Jobs',
  createButton: {
    label: 'Add new job',
    to: '/jobs/new'
  },
  dataFields: [
    {
      key: 'id',
      label: 'Id',
      sortable: false
    },
    {
      key: 'position',
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
      key: 'status',
      label: 'Status',
      sortable: false
    }
  ],
  data: mockJobs
})
</script>
