<template>
  <AwardForm
    title="Edit award"
    action="update"
    submit-button-label="Update award"
    :form="currentAward"
  />
</template>

<script setup lang="ts">
const currentAward = ref({
  name: 'MIM Aug 2024',
  type: 'Most Improve Member',
  description: 'abc'
})
</script>
