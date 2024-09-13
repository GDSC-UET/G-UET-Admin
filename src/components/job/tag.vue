<template>
  <UBadge
    :label="label"
    variant="solid"
    size="lg"
    :color="color || 'white'"
    class="hidden md:flex"
  />
  <UBadge :label="label" variant="solid" :color="color || 'white'" class="md:hidden" />
</template>

<script setup lang="ts">
import type { JobTag } from '~/types/jobs'

const props = defineProps<JobTag>()

const badgeColors = [
  {
    label: 'New',
    color: 'primary'
  },
  {
    label: 'Hot',
    color: 'red'
  }
]

const color = computed(() => {
  const badgeColor = badgeColors.find((element) => element.label === props.label)
  return badgeColor ? badgeColor.color : ''
})
</script>
