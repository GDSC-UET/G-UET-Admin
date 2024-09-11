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
import { mockProjects } from '~/mock/projects'
import type { TablePages } from '~/types/table-pages'

const tablePagesData = ref<TablePages>({
  title: 'All Projects',
  createButton: {
    label: 'Add new project',
    to: '/projects/new'
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
      sortable: false
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true
    },
    {
      key: 'startedAt',
      label: 'Started At',
      sortable: false
    },
    {
      key: 'finishedAt',
      label: 'Finished At',
      sortable: true
    },
    {
      key: 'version',
      label: 'Version',
      sortable: false
    },
    {
      key: 'description',
      label: 'Description',
      sortable: false
    }
  ],
  data: mockProjects
})
</script>
