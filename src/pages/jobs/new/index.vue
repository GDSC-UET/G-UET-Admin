<template>
  <PagesForm
    title="Add new job"
    submit-button-label="Update job"
    action="update"
    @submit="handleSubmit"
    @cancel="handleCancel"
  >
    Haha
  </PagesForm>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  console.log('submit')
}

const handleCancel = () => {
  console.log('cancel')
}
</script>
