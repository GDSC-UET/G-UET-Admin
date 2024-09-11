<template>
  <ProjectForm
    title="Edit project"
    action="update"
    submit-button-label="Update project"
    :form="currentProject"
  />
</template>

<script setup lang="ts">
const currentProject = ref({
  name: 'G-UET',
  version: '1.0',
  github: 'https://github.com/GDSC-UET/G-UET',
  product: 'https://G-UET.vercel.app/',
  description: 'abc'
})
</script>
