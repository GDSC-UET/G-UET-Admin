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
        <UInput placeholder="Enter award name..." size="md" v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Type" name="type" required>
        <USelect placeholder="Select" size="md" v-model="state.type" :options="awardTypeOptions" />
      </UFormGroup>

      <UFormGroup label="Description" name="description" required>
        <UTextarea v-model="state.description" />
      </UFormGroup>
    </UForm>
  </PagesForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, FormError, FormErrorEvent } from '#ui/types'
import { awardTypeOptions } from '~/constants/select-options/award'
import type { AwardForm, AwardFormState } from '~/types/awards'

const props = defineProps<AwardForm>()

const formRef = ref()

const state = reactive<AwardFormState>({
  name: props.form?.name || '',
  type: props.form?.type || '',
  description: props.form?.description || ''
})

const validate = (state: AwardFormState): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.type) errors.push({ path: 'type', message: 'Required' })
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

const onSubmit = async (event: FormSubmitEvent<AwardFormState>) => {
  emit('form-submit', event.data)
}
</script>
