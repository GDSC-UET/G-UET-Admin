<template>
  <JobForm action="update" title="Edit job" submit-button-label="Update job" :form="currentJob" />
</template>

<script setup lang="ts">
const currentJob = ref({
  position: 'Frontend Developer',
  description: 'abc',
  isOpen: true,
  tag: 'Hot'
})
</script>
