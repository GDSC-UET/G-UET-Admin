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
import { mockMembers } from '~/mock/members'

const tablePagesData = ref<TablePages>({
  title: 'All Members',
  createButton: {
    label: 'Add new member',
    to: '/members/new'
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
      key: 'position',
      label: 'Position',
      sortable: true
    },
    {
      key: 'gen',
      label: 'Gen',
      sortable: true
    },
    {
      key: 'school',
      label: 'School',
      sortable: false
    }
  ],
  data: mockMembers
})
</script>
