<template>
  <PagesForm
    title="Add new job"
    submit-button-label="Update job"
    action="update"
    @submit="handleSubmit"
    @cancel="handleCancel"
  >
    <SelectedOption label="Tran Manh Dung" />
  </PagesForm>
</template>

<script setup lang="ts">
import SelectedOption from '~/components/common/selected-option.vue'

const handleSubmit = () => {
  console.log('submit')
}

const handleCancel = () => {
  console.log('cancel')
}
</script>
