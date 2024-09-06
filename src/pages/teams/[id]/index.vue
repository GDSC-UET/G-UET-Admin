<template>
  <UContainer>
    <TeamDetail
      :id="teamDetail.id"
      :name="teamDetail.name"
      :description="teamDetail.description"
      :positions="teamDetail.positions"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockTeam } from '~/mock/teams'

const teamDetail = ref(mockTeam)
</script>
