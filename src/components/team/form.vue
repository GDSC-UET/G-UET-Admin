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
      class="flex w-full flex-col gap-4 md:gap-8"
      @error="onError"
      @submit="onSubmit"
      ref="formRef"
    >
      <UFormGroup label="Name" name="name" required>
        <UInput placeholder="Enter team name..." size="md" v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Description" name="description" required>
        <UTextarea v-model="state.description" />
      </UFormGroup>
    </UForm>
  </PagesForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, FormError, FormErrorEvent } from '#ui/types'
import type { TeamForm, TeamFormState } from '~/types/teams'

const props = defineProps<TeamForm>()

const formRef = ref()

const state = reactive<TeamFormState>({
  name: props.form?.name || '',
  description: props.form?.description || ''
})

const validate = (state: TeamFormState): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
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

const onSubmit = async (event: FormSubmitEvent<TeamFormState>) => {
  emit('form-submit', event.data)
}
</script>
