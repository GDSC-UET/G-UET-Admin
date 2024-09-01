<template>
  <UVerticalNavigation :links="navigationLinks" class="mt-4 w-full">
    <template #icon="{ link }">
      <UIcon :name="link.icon" class="group-hover:text-primary ml-1 text-2xl" />
    </template>
    <template #default="{ link }">
      <span
        class="group-hover:text-primary relative ml-1 flex h-12 items-center text-base font-medium"
        >{{ link.label }}</span
      >
    </template>
  </UVerticalNavigation>
</template>

<script setup lang="ts">
const navigationLinks = ref([
  {
    label: 'Jobs',
    icon: 'i-heroicons-briefcase',
    to: '/jobs'
  },
  {
    label: 'Members',
    icon: 'i-heroicons-users',
    to: '/members'
  },
  {
    label: 'Applicants',
    icon: 'i-heroicons-document-text',
    to: '/applicants'
  },
  {
    label: 'Positions',
    icon: 'i-heroicons-briefcase',
    to: '/positions'
  },
  {
    label: 'Teams',
    icon: 'i-heroicons-users',
    to: '/teams'
  },
  {
    label: 'Awards',
    icon: 'i-heroicons-trophy',
    to: '/awards'
  },
  {
    label: 'Projects',
    icon: 'i-heroicons-briefcase',
    to: '/projects'
  }
])
</script>
