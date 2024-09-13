<template>
  <div class="my-8 flex flex-col gap-4 md:my-16 md:gap-8">
    <div class="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center md:gap-4">
      <span class="text-2xl font-medium md:text-4xl">{{ name }}</span>
      <div class="flex items-center gap-4">
        <span class="text-sm md:text-base">Status: {{ status }}</span>
        <UButton color="green" label="Shortlist" class="hidden md:flex" />
        <UButton color="green" label="Shortlist" class="md:hidden" size="xs" />
        <UButton color="red" label="Decline" class="hidden md:flex" />
        <UButton color="red" label="Decline" class="md:hidden" size="xs" />
      </div>
    </div>
    <span class="font-medium md:text-xl">{{ email }} • {{ phoneNumber }}</span>
    <div class="flex items-center gap-4">
      <span class="font-medium md:text-xl">{{ position.name }}</span>
      <TeamBadge :label="position.team" />
    </div>
    <span class="font-medium md:text-xl">Applied at {{ format(appliedAt, 'mm/dd/yyyy') }}</span>
    <span class="font-medium md:text-xl">{{ school }}</span>
    <p><span class="font-medium md:text-xl">Link CV: </span>{{ linkCV }}</p>
    <p><span class="font-medium md:text-xl">Notes: </span>{{ notes }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ApplicantDetail } from '~/types/applicants'
import { format } from 'date-fns'

defineProps<ApplicantDetail>()
</script>
