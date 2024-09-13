<template>
  <div class="relative w-fit">
    <UBadge :color="color" :label="label" size="lg" class="hidden md:flex" />
    <UBadge :color="color" :label="label" size="md" class="md:hidden" />
  </div>
</template>

<script setup lang="ts">
import type { TeamBadge } from '~/types/teams'

const props = defineProps<TeamBadge>()

const badgeColors = [
  {
    label: 'Most Improve Member',
    color: 'green'
  },
  {
    label: 'Member Of The Month',
    color: 'red'
  },
  {
    label: 'Member Of The Year',
    color: 'blue'
  },
  {
    label: 'Most Valuable Member',
    color: 'yellow'
  }
]

const color = computed(() => {
  const badgeColor = badgeColors.find((element) => element.label === props.label)
  return badgeColor ? badgeColor.color : ''
})
</script>
