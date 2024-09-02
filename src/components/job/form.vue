<template>
  <PagesForm title="Add new job" action="create" @submit="submit" submit-button-label="Create job">
    <UForm
      :validate="validate"
      :state="state"
      class="flex w-full flex-col gap-8"
      @error="onError"
      @submit="onSubmit"
      ref="formRef"
    >
      <UFormGroup label="Position" name="position" required>
        <USelect
          placeholder="Select"
          size="xl"
          v-model="state.position"
          :options="positionOptions"
        />
      </UFormGroup>

      <UFormGroup label="Description" name="description" required>
        <UTextarea v-model="state.description" />
      </UFormGroup>

      <div class="flex items-start justify-between">
        <UFormGroup label="Open Job" name="isOpen" required>
          <UToggle v-model="state.isOpen" />
        </UFormGroup>

        <UFormGroup label="Tag" name="tag" class="w-[360px]">
          <USelect placeholder="Select" size="xl" v-model="state.tag" :options="jobTagOptions" />
        </UFormGroup>
      </div>
    </UForm>
  </PagesForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, FormError, FormErrorEvent } from '#ui/types'
import { jobTagOptions } from '~/constants/select-options/jobs'
import { positionOptions } from '~/constants/select-options/positions'
import type { JobForm } from '~/types/forms'

const formRef = ref()

const state = reactive<JobForm>({
  position: '',
  description: '',
  isOpen: false,
  tag: ''
})

const validate = (state: JobForm): FormError[] => {
  const errors = []
  if (!state.position) errors.push({ path: 'position', message: 'Required' })
  if (!state.description) errors.push({ path: 'description', message: 'Required' })
  return errors
}

const onError = async (event: FormErrorEvent) => {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const submit = async () => {
  formRef.value?.submit()
}

const onSubmit = async (event: FormSubmitEvent<any>) => {
  console.log(event.data)
}
</script>
