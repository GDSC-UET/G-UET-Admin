<template>
  <UVerticalNavigation
    :links="navigationLinks"
    class="z-10 w-full border-b border-gray-300 bg-white lg:mt-4 lg:border-none"
    @click="emit('choose')"
  >
    <template #icon="{ link }">
      <UIcon :name="link.icon" class="group-hover:text-primary ml-1 md:text-2xl" />
    </template>
    <template #default="{ link }">
      <span
        class="group-hover:text-primary relative ml-1 flex h-6 items-center text-xs font-medium md:h-12 md:text-base"
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
    icon: 'i-heroicons-rectangle-stack',
    to: '/positions'
  },
  {
    label: 'Teams',
    icon: 'i-heroicons-building-office',
    to: '/teams'
  },
  {
    label: 'Awards',
    icon: 'i-heroicons-trophy',
    to: '/awards'
  },
  {
    label: 'Projects',
    icon: 'i-heroicons-wrench-screwdriver',
    to: '/projects'
  }
])

const emit = defineEmits<{
  (e: 'choose'): void
}>()
</script>
