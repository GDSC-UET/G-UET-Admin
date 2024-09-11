<template>
  <UContainer>
    <AwardPresent
      :id="awardDetail.id"
      :description="awardDetail.description"
      :name="awardDetail.name"
      :owners="awardDetail.owners"
      :type="awardDetail.type"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockAward } from '~/mock/awards'

const awardDetail = ref(mockAward)
</script>
