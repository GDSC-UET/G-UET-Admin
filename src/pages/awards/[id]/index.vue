<template>
  <UContainer>
    <AwardDetail
      :id="awardDetail.id"
      :name="awardDetail.name"
      :type="awardDetail.type"
      :description="awardDetail.description"
      :owners="awardDetail.owners"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockAward } from '~/mock/awards'

const awardDetail = ref(mockAward)
</script>
