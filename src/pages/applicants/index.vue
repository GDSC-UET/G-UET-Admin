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
import { mockApplicants } from '~/mock/applicants'

const tablePagesData = ref<TablePages>({
  title: 'All Applicants',
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
      key: 'position',
      label: 'Position',
      sortable: true
    },
    {
      key: 'linkCV',
      label: 'Link CV',
      sortable: false
    },
    {
      key: 'appliedAt',
      label: 'Applied At',
      sortable: true
    }
  ],
  data: mockApplicants
})
</script>
