<template>
  <div class="relative w-fit">
    <UBadge :color="color" :label="label" size="lg" class="relative hidden md:flex" />
    <UBadge :color="color" :label="label" class="relative md:hidden" />
    <div v-if="label === 'Board of Leader'" class="absolute bottom-[0.5px] flex h-[2px] w-full">
      <div class="bg-primary grow rounded-bl-lg"></div>
      <div class="grow bg-red-500"></div>
      <div class="grow bg-green-500"></div>
      <div class="grow rounded-br-lg bg-yellow-500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamBadge } from '~/types/teams'

const props = defineProps<TeamBadge>()

const badgeColors = [
  {
    label: 'Technical',
    color: 'red'
  },
  {
    label: 'Marketing',
    color: 'yellow'
  },
  {
    label: 'Event',
    color: 'green'
  },
  {
    label: 'Human Resources',
    color: 'blue'
  },
  {
    label: 'Alumni',
    color: 'white'
  },
  {
    label: 'Board of Leader',
    color: 'white'
  }
]

const color = computed(() => {
  const badgeColor = badgeColors.find((element) => element.label === props.label)
  return badgeColor ? badgeColor.color : ''
})
</script>
