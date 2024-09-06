<template>
  <UContainer>
    <PositionDetail
      :id="positionDetail.id"
      :members="positionDetail.members"
      :name="positionDetail.name"
      :responsibilities="positionDetail.responsibilities"
      :team="positionDetail.team"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockPosition } from '~/mock/positions'

const positionDetail = ref(mockPosition)
</script>
