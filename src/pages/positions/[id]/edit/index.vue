<template>
  <PositionForm
    title="Edit position"
    action="update"
    submit-button-label="Update position"
    :form="currentPosition"
  />
</template>

<script setup lang="ts">
const currentPosition = ref({
  name: 'Frontend Developer',
  team: 'Technical',
  responsibilities: 'abc'
})
</script>
