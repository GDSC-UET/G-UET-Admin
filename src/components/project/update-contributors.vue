<template>
  <div class="mt-16 flex flex-col gap-8">
    <span class="mx-auto text-4xl font-medium">Update contributors</span>
    <span class="text-lg font-medium">{{ `${name} (v${version})` }}</span>
    <UForm
      :state="newContributorState"
      class="flex flex-col items-center gap-4 md:flex-row md:items-end"
    >
      <UFormGroup label="Member" class="w-full md:w-2/5">
        <USelect :options="members" size="md" v-model="newContributorState.contributor.id" />
      </UFormGroup>

      <UFormGroup label="Roles" class="w-full md:w-2/5">
        <USelectMenu
          :options="roleOptions"
          size="md"
          searchable
          v-model="newContributorState.roles"
        />
      </UFormGroup>

      <UFormGroup class="grow">
        <UButton label="Add" size="md" class="w-[200px] justify-center md:w-full"></UButton>
      </UFormGroup>
    </UForm>

    <UFormGroup label="Current contributors" class="flex flex-col">
      <CommonSelectedOption
        v-for="member in selectedContributors"
        :key="member.contributor.id"
        :label="`${member.contributor.name}: ${member.roles.join(', ')}`"
      />
    </UFormGroup>

    <div class="mx-auto flex flex-col gap-2">
      <UButton
        class="w-[300px] justify-center rounded-full"
        size="md"
        type="submit"
        label="Submit contributors"
      ></UButton>
      <UButton
        class="w-[300px] justify-center rounded-full"
        size="md"
        color="gray"
        label="Cancel"
      ></UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { roleOptions } from '~/constants/select-options/projects'
import type {
  NewContributorState,
  ProjectContributorsForm,
  UpdateContributors
} from '~/types/projects'

const props = defineProps<UpdateContributors>()

const selectedContributors = ref(props.contributors)

const newContributorState = reactive<NewContributorState>({
  contributor: {
    id: 0,
    name: ''
  },
  roles: []
})

const state = reactive<ProjectContributorsForm>({
  id: props.id,
  contributors: selectedContributors.value
})

const members = [
  {
    label: 'Tran Manh Dung',
    value: 1
  },
  {
    label: 'Bui Duc Anh',
    value: 2
  }
]
</script>
