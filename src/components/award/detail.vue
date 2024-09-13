<template>
  <div class="my-8 flex flex-col gap-4 md:my-16 md:gap-8">
    <div class="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
      <span class="text-2xl font-medium md:text-4xl">{{ name }}</span>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/awards/${id}/edit`" class="hidden md:block">
          <UButton label="Edit award" color="yellow" class="hidden md:flex" />
        </nuxt-link>

        <nuxt-link :to="`/awards/${id}/edit`">
          <UButton label="Edit award" size="xs" color="yellow" class="md:hidden" />
        </nuxt-link>

        <UButton label="Delete award" color="red" class="hidden md:flex" />
        <UButton label="Delete award" color="red" class="md:hidden" size="xs" />
      </div>
    </div>
    <AwardTag :label="type" />
    <CommonList label="Description:" :data="formattedDescription" />
    <span class="font-medium md:text-xl"> Owners: {{ formattedOwners }} </span>
    <nuxt-link :to="`/awards/${id}/present`" class="hidden md:block">
      <UButton label="Present this award" color="yellow" />
    </nuxt-link>

    <nuxt-link :to="`/awards/${id}/present`" class="md:hidden">
      <UButton label="Present this award" color="yellow" size="xs" />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { AwardDetail } from '~/types/awards'

const props = defineProps<AwardDetail>()

const formattedDescription = computed(() => {
  return props.description.split('\n')
})

const formattedOwners = computed(() => {
  return props.owners.map((element) => element.name).join(', ')
})
</script>
