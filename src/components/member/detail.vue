<template>
  <div class="my-8 flex flex-col gap-4 md:my-16 md:gap-8">
    <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
      <span class="text-2xl font-medium md:text-4xl">{{ name }}</span>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/members/${id}/edit`" class="hidden md:flex">
          <UButton label="Edit member" color="yellow" size="sm" />
        </nuxt-link>
        <nuxt-link :to="`/members/${id}/edit`" class="md:hidden">
          <UButton label="Edit member" color="yellow" size="xs" />
        </nuxt-link>
        <UButton label="Delete member" color="red" size="sm" class="hidden md:flex" />
        <UButton label="Delete member" color="red" size="xs" class="md:hidden" />
      </div>
    </div>
    <div class="h-[200px] w-full">
      <NuxtImg :src="avatar" preload class="h-full rounded-full border border-gray-200" />
    </div>
    <div class="flex items-center gap-4">
      <span class="font-medium md:text-xl">{{ position }}</span>
      <TeamBadge :label="team" />
    </div>
    <span class="font-medium md:text-xl"
      >Gen {{ gen }} • Joined at {{ format(joinedAt, 'MM/dd/yyyy') }}</span
    >
    <div>
      <span class="font-medium md:text-xl">Social Links:</span>
      <ul class="ml-6 list-disc text-sm md:text-base">
        <li v-if="facebook">Facebook: {{ facebook }}</li>
        <li v-if="github">Github: {{ github }}</li>
        <li v-if="linkedin">LinkedIn: {{ linkedin }}</li>
      </ul>
    </div>
    <CommonList label="About this member:" :data="formattedAbout" />
    <div>
      <span class="font-medium md:text-xl">Awards:</span>
      <ul class="ml-6 list-disc text-sm md:text-base">
        <li v-for="item in awards" :key="item.id">{{ item.label }}</li>
      </ul>
    </div>
    <div>
      <span class="font-medium md:text-xl">Activities:</span>
      <ul class="ml-6 list-disc text-sm md:text-base">
        <li v-for="item in activities" :key="item.id">
          {{ item.project }}: {{ item.start }} - {{ item.end }}
        </li>
      </ul>
      <nuxt-link :to="`/members/${id}/activities`" class="hidden md:flex">
        <UButton color="yellow" label="Edit activities" class="mt-2" />
      </nuxt-link>
      <nuxt-link :to="`/members/${id}/activities`" class="md:hidden">
        <UButton color="yellow" label="Edit activities" class="mt-2" size="xs" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import type { MemberDetail } from '~/types/members'

const props = defineProps<MemberDetail>()

const formattedAbout = computed(() => {
  return props.aboutThisMember.split('\n')
})
</script>
