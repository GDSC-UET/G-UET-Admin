<template>
  <PagesForm
    :title="title"
    :action="action"
    @submit="formRef.submit()"
    :submit-button-label="submitButtonLabel"
  >
    <UForm
      :validate="validate"
      :state="state"
      class="flex w-full flex-col gap-8"
      @error="onError"
      @submit="onSubmit"
      ref="formRef"
    >
      <UFormGroup label="Name" name="name" required>
        <UInput placeholder="Enter project name..." size="md" v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Version" name="version" required>
        <UInput placeholder="Enter project version..." size="md" v-model="state.version" />
      </UFormGroup>

      <UFormGroup label="Link Github Project" name="github" required>
        <UInput placeholder="Enter project github link..." size="md" v-model="state.github" />
      </UFormGroup>

      <UFormGroup label="Link Product" name="product" required>
        <UInput placeholder="Enter project product link..." size="md" v-model="state.product" />
      </UFormGroup>

      <UFormGroup label="Description" name="description" required>
        <UTextarea v-model="state.description" />
      </UFormGroup>
    </UForm>
  </PagesForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, FormError, FormErrorEvent } from '#ui/types'
import type { ProjectForm, ProjectFormState } from '~/types/projects'

const props = defineProps<ProjectForm>()

const formRef = ref()

const state = reactive<ProjectFormState>({
  name: props.form?.name || '',
  version: props.form?.version || '',
  github: props.form?.github || '',
  product: props.form?.product || '',
  description: props.form?.description || ''
})

const validate = (state: ProjectFormState): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.version) errors.push({ path: 'version', message: 'Required' })
  if (!state.github) errors.push({ path: 'github', message: 'Required' })
  if (!state.product) errors.push({ path: 'product', message: 'Required' })
  if (!state.description) errors.push({ path: 'description', message: 'Required' })
  return errors
}

const onError = async (event: FormErrorEvent) => {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const emit = defineEmits<{
  (e: 'form-submit', data: object): void
}>()

const onSubmit = async (event: FormSubmitEvent<ProjectFormState>) => {
  emit('form-submit', event.data)
}
</script>
