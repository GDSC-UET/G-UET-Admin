<template>
  <PagesForm
    :title="title"
    :action="action"
    @submit="formRef.submit()"
    :submit-button-label="submitButtonLabel"
  >
    <UForm
      :state="newRoleState"
      :validate="newRoleValidate"
      class="flex w-full items-end gap-4"
      @submit="onNewRoleSubmit"
    >
      <UFormGroup label="New Project Role" class="grow">
        <UInput placeholder="Enter project role name..." size="md" v-model="newRoleState.name" />
      </UFormGroup>

      <UButton type="submit" label="Create role" size="md" :disabled="!newRoleState.name" />
    </UForm>

    <UForm :state="state" class="flex w-full flex-col gap-8" @submit="onSubmit" ref="formRef">
      <UFormGroup label="Current Project Roles">
        <CommonSelectedOption
          v-for="role in state.roles"
          :key="role.id"
          :label="role.name"
          @delete="deleteRole(role.id)"
        />
      </UFormGroup>
    </UForm>
  </PagesForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { NewProjectRoleState, ProjectRolesForm, ProjectRolesFormState } from '~/types/projects'

const props = defineProps<ProjectRolesForm>()

const newRoleId = ref(0)

const formRef = ref()

const newRoleState = reactive<NewProjectRoleState>({ name: '' })

const newRoleValidate = (state: NewProjectRoleState): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  return errors
}

const state = reactive<ProjectRolesFormState>({
  roles: props.form?.roles || []
})

const emit = defineEmits<{
  (e: 'form-submit', data: object): void
}>()

const onSubmit = async (event: FormSubmitEvent<ProjectRolesFormState>) => {
  emit('form-submit', event.data)
}

const onNewRoleSubmit = async (event: FormSubmitEvent<NewProjectRoleState>) => {
  const newRole = {
    id: newRoleId.value,
    name: event.data.name
  }

  state.roles = [...state.roles, newRole]

  newRoleId.value = newRoleId.value - 1
  newRoleState.name = ''
}

const deleteRole = (id: number) => {
  const index = state.roles.findIndex((element) => element.id === id)

  state.roles.splice(index, 1)
}
</script>
