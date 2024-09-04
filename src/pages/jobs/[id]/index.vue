<template>
  <UContainer>
    <JobDetail
      :id="jobDetail.id"
      :position="jobDetail.position"
      :tag="jobDetail.tag"
      :is-open="jobDetail.isOpen"
      :description="jobDetail.description"
      :applicants="jobDetail.applicants"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockJob } from '~/mock/jobs'

const jobDetail = ref(mockJob)
</script>
