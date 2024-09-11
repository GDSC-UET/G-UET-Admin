<template>
  <TeamForm
    action="update"
    title="Edit team"
    submit-button-label="Update team"
    :form="currentTeam"
  />
</template>

<script setup lang="ts">
const currentTeam = ref({
  name: 'Frontend Developer',
  description: 'abc'
})
</script>
