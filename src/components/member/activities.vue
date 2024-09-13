<template>
  <div class="my-8 flex flex-col gap-4 md:my-16 md:gap-8">
    <span class="text-center text-2xl font-medium md:text-4xl">Update member activities</span>
    <span class="text-base font-medium md:text-xl">{{ name }}</span>
    <span class="text-base font-medium md:text-xl">Position: {{ position }}</span>
    <UForm
      :state="newActivitiesState"
      class="flex flex-col items-center gap-4 lg:flex-row lg:items-end"
      @submit=""
    >
      <div class="flex w-full gap-4 lg:w-2/5">
        <UFormGroup required label="Started At" class="w-1/2">
          <UPopover :popper="{ placement: 'bottom-start' }" class="w-full">
            <UButton
              icon="i-heroicons-calendar-days"
              :label="format(newActivitiesState.start, 'MM/dd/yyyy')"
              color="white"
              class="w-full"
              size="md"
            />

            <template #panel="{ close }">
              <VDatePicker v-model="newActivitiesState.start" @close="close" />
            </template>
          </UPopover>
        </UFormGroup>

        <UFormGroup required label="Finish At" class="w-1/2">
          <UPopover :popper="{ placement: 'bottom-start' }" class="w-full">
            <UButton
              icon="i-heroicons-calendar-days"
              :label="format(newActivitiesState.end, 'MM/dd/yyyy')"
              color="white"
              class="w-full"
              size="md"
            />

            <template #panel="{ close }">
              <VDatePicker v-model="newActivitiesState.end" @close="close" />
            </template>
          </UPopover>
        </UFormGroup>
      </div>

      <UFormGroup required class="w-full lg:w-1/2" label="Project">
        <USelect
          v-model="newActivitiesState.project"
          :options="projectOptions"
          label="Select project"
          size="md"
          placeholder="Select"
        />
      </UFormGroup>

      <UFormGroup class="grow">
        <UButton type="submit" label="Add" size="md" class="w-[200px] justify-center lg:w-full" />
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
          size="md"
          class="w-[300px] justify-center rounded-full"
        />
      </UFormGroup>

      <UButton
        label="Cancel"
        class="w-[300px] justify-center rounded-full"
        color="gray"
        size="md"
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
