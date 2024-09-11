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
        <UInput placeholder="Enter member name..." size="md" v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Avatar" name="avatar" required>
        <UInput placeholder="Enter member avatar..." size="md" v-model="state.avatar" />
      </UFormGroup>

      <UFormGroup label="Email" name="email" required>
        <UInput placeholder="Enter member email..." size="md" v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="School" name="school" required>
        <UInput placeholder="Enter member school..." size="md" v-model="state.school" />
      </UFormGroup>

      <UFormGroup label="Position" name="position" required>
        <USelect
          placeholder="Select"
          size="md"
          v-model="state.position"
          :options="positionOptions"
        />
      </UFormGroup>

      <UFormGroup label="Joined At" name="joinedAt" required>
        <UPopover :popper="{ placement: 'bottom-start' }" class="w-full">
          <UButton
            icon="i-heroicons-calendar-days"
            :label="format(state.joinedAt || new Date(), 'd MMM, yyy')"
            color="white"
            class="w-full"
            size="md"
          />

          <template #panel="{ close }">
            <VDatePicker v-model="state.joinedAt" @close="close" />
          </template>
        </UPopover>
      </UFormGroup>

      <UFormGroup label="Gen" name="gen" required>
        <USelect placeholder="Select" size="md" v-model="state.gen" :options="genOptions" />
      </UFormGroup>

      <UFormGroup label="About this member" name="aboutThisMember" required>
        <UTextarea v-model="state.aboutThisMember" />
      </UFormGroup>

      <UFormGroup label="Facebook" name="facebook" required>
        <UInput placeholder="Enter member facebook..." size="md" v-model="state.facebook" />
      </UFormGroup>

      <UFormGroup label="Github" name="github" required>
        <UInput placeholder="Enter member github..." size="md" v-model="state.github" />
      </UFormGroup>

      <UFormGroup label="LinkedIn" name="linkedin" required>
        <UInput placeholder="Enter member linkedin..." size="md" v-model="state.linkedin" />
      </UFormGroup>
    </UForm>
  </PagesForm>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import type { FormSubmitEvent, FormError, FormErrorEvent } from '#ui/types'
import { positionOptions } from '~/constants/select-options/positions'
import type { MemberForm, MemberFormState } from '~/types/members'
import { genOptions } from '~/constants/select-options/gens'

const props = defineProps<MemberForm>()

const formRef = ref()

const state = reactive<MemberFormState>({
  name: props.form?.name || '',
  avatar: props.form?.avatar || '',
  email: props.form?.email || '',
  school: props.form?.school || '',
  position: props.form?.position || '',
  joinedAt: props.form?.joinedAt || new Date(),
  gen: props.form?.gen || undefined,
  aboutThisMember: props.form?.aboutThisMember || '',
  facebook: props.form?.facebook || '',
  github: props.form?.github || '',
  linkedin: props.form?.linkedin || ''
})

const validate = (state: MemberFormState): FormError[] => {
  const errors: FormError[] = []

  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.avatar) errors.push({ path: 'avatar', message: 'Required' })

  if (!state.email) {
    errors.push({ path: 'email', message: 'Required' })
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email regex pattern
    if (!emailRegex.test(state.email)) {
      errors.push({ path: 'email', message: 'Invalid email format' })
    }
  }

  if (!state.school) errors.push({ path: 'school', message: 'Required' })
  if (!state.position) errors.push({ path: 'position', message: 'Required' })
  if (!state.joinedAt) errors.push({ path: 'joinedAt', message: 'Required' })
  if (!state.gen) errors.push({ path: 'gen', message: 'Required' })
  if (!state.aboutThisMember) errors.push({ path: 'aboutThisMember', message: 'Required' })
  if (!state.facebook) errors.push({ path: 'facebook', message: 'Required' })
  if (!state.github) errors.push({ path: 'github', message: 'Required' })
  if (!state.linkedin) errors.push({ path: 'linkedin', message: 'Required' })

  return errors
}

const setJoinedAt = (value: Date) => {
  console.log(value)
  state.joinedAt = value
}

const onError = async (event: FormErrorEvent) => {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const emit = defineEmits<{
  (e: 'form-submit', data: object): void
}>()

const onSubmit = async (event: FormSubmitEvent<MemberFormState>) => {
  emit('form-submit', event.data)
}
</script>
