<template>
  <div class="my-16 flex flex-col gap-8">
    <span class="text-center text-4xl font-medium">Update member activities</span>
    <span class="text-xl font-medium">{{ name }}</span>
    <span class="text-xl font-medium">Position: {{ position }}</span>
    <UForm :state="newActivitiesState" class="flex items-end gap-4" @submit="">
      <UFormGroup required label="Started At" class="w-1/5">
        <UPopover :popper="{ placement: 'bottom-start' }" class="w-full">
          <UButton
            icon="i-heroicons-calendar-days"
            :label="format(newActivitiesState.start, 'MM/dd/yyyy')"
            color="white"
            class="w-full"
            size="xl"
          />

          <template #panel="{ close }">
            <CommonDatePicker v-model="newActivitiesState.start" @close="close" />
          </template>
        </UPopover>
      </UFormGroup>

      <UFormGroup required label="Finish At" class="w-1/5">
        <UPopover :popper="{ placement: 'bottom-start' }" class="w-full">
          <UButton
            icon="i-heroicons-calendar-days"
            :label="format(newActivitiesState.end, 'MM/dd/yyyy')"
            color="white"
            class="w-full"
            size="xl"
          />

          <template #panel="{ close }">
            <CommonDatePicker v-model="newActivitiesState.end" @close="close" />
          </template>
        </UPopover>
      </UFormGroup>

      <UFormGroup required class="w-1/2" label="Project">
        <USelect
          v-model="newActivitiesState.project"
          :options="projectOptions"
          label="Select project"
          size="xl"
          placeholder="Select"
        />
      </UFormGroup>

      <UFormGroup class="grow">
        <UButton type="submit" label="Add" size="xl" />
      </UFormGroup>
    </UForm>

    <UFormGroup label="Current activities">
      <CommonSelectedOption
        v-for="item in activities"
        :key="item.project"
        :label="`${format(item.start, 'MMM d, yyyy')} - ${format(item.end, 'MMM d, yyyy')}: ${item.project}`"
        class="mt-1"
      />
    </UFormGroup>

    <div class="mx-auto flex flex-col gap-2">
      <UFormGroup>
        <UButton
          type="submit"
          label="Submit member activities"
          size="xl"
          class="w-[300px] justify-center rounded-full"
        />
      </UFormGroup>

      <UButton
        label="Cancel"
        class="w-[300px] justify-center rounded-full"
        color="gray"
        size="xl"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import type { MemberActivities, NewActivitiesState } from '~/types/members'

const props = defineProps<MemberActivities>()

const newActivitiesIndex = ref(0)

const currentActivities = ref(props.activities)

const newActivitiesState = reactive<NewActivitiesState>({
  start: new Date('8/24/2024'),
  end: new Date('8/28/2024'),
  project: ''
})

const projectOptions = [
  {
    label: 'G-UET',
    value: 'G-UET'
  },
  {
    label: 'G-UET-Admin',
    value: 'G-UET-Admin'
  }
]
</script>
