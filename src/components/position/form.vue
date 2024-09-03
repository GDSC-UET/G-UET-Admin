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
        <UInput placeholder="Enter position name..." size="xl" v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Team" name="team" required>
        <USelect placeholder="Select" size="xl" v-model="state.team" :options="teamOptions" />
      </UFormGroup>

      <UFormGroup label="Resposibilities" name="responsibilities" required>
        <UTextarea v-model="state.responsibilities" />
      </UFormGroup>
    </UForm>
  </PagesForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, FormError, FormErrorEvent } from '#ui/types'
import { teamOptions } from '~/constants/select-options/teams'
import type { PositionForm, PositionFormState } from '~/types/positions'

const props = defineProps<PositionForm>()

const formRef = ref()

const state = reactive<PositionFormState>({
  name: props.form?.name || '',
  team: props.form?.team || '',
  responsibilities: props.form?.responsibilities || ''
})

const validate = (state: PositionFormState): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.team) errors.push({ path: 'team', message: 'Required' })
  if (!state.responsibilities) errors.push({ path: 'responsibilities', message: 'Required' })
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

const onSubmit = async (event: FormSubmitEvent<PositionFormState>) => {
  emit('form-submit', event.data)
}
</script>
