<template>
  <div class="my-16 flex flex-col gap-8">
    <div class="flex items-center justify-between">
      <span class="text-4xl font-medium">{{ name }}</span>
      <div class="flex items-center gap-4">
        <span>Status: {{ status }}</span>
        <UButton color="green" label="Shortlist" />
        <UButton color="red" label="Decline" />
      </div>
    </div>
    <span class="text-xl font-medium">{{ email }} • {{ phoneNumber }}</span>
    <div class="flex items-center gap-4">
      <span class="text-xl font-medium">{{ position.name }}</span>
      <TeamBadge :label="position.team" />
    </div>
    <span class="text-xl font-medium">Applied at {{ format(appliedAt, 'mm/dd/yyyy') }}</span>
    <span class="text-xl font-medium">{{ school }}</span>
    <p><span class="text-xl font-medium">Link CV: </span>{{ linkCV }}</p>
    <p><span class="text-xl font-medium">Notes: </span>{{ notes }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ApplicantDetail } from '~/types/applicants'
import { format } from 'date-fns'

defineProps<ApplicantDetail>()
</script>
