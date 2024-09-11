<template>
  <ProjectRolesForm
    title="Update Project Roles"
    action="create"
    submit-button-label="Submit project roles"
    :form="currentProjectRoles"
  />
</template>

<script setup lang="ts">
const currentProjectRoles = ref({
  roles: [
    {
      id: 1,
      name: 'Project Manager'
    },
    {
      id: 2,
      name: 'Frontend Developer'
    }
  ]
})
</script>
