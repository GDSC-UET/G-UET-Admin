<template>
  <div class="my-16 flex flex-col gap-8">
    <div class="flex items-center justify-between">
      <span class="text-4xl font-medium">{{ name }}</span>

      <div class="flex items-center gap-4">
        <nuxt-link :to="`/members/${id}/edit`">
          <UButton label="Edit member" color="yellow" size="sm" />
        </nuxt-link>
        <UButton label="Delete member" color="red" size="sm" />
      </div>
    </div>
    <div class="h-[200px] w-full">
      <NuxtImg :src="avatar" preload class="h-full rounded-full border border-gray-200" />
    </div>
    <div class="flex items-center gap-4">
      <span class="text-xl font-medium">{{ position }}</span>
      <TeamBadge :label="team" />
    </div>
    <span class="text-xl font-medium"
      >Gen {{ gen }} • Joined at {{ format(joinedAt, 'MM/dd/yyyy') }}</span
    >
    <div>
      <span class="text-xl font-medium">Social Links:</span>
      <ul class="ml-6 list-disc">
        <li v-if="facebook">Facebook: {{ facebook }}</li>
        <li v-if="github">Github: {{ github }}</li>
        <li v-if="linkedin">LinkedIn: {{ linkedin }}</li>
      </ul>
    </div>
    <CommonList label="About this member:" :data="formattedAbout" />
    <div>
      <span class="text-xl font-medium">Awards:</span>
      <ul class="ml-6 list-disc">
        <li v-for="item in awards" :key="item.id">{{ item.label }}</li>
      </ul>
    </div>
    <div>
      <span class="text-xl font-medium">Activities:</span>
      <ul class="ml-6 list-disc">
        <li v-for="item in activities" :key="item.id">
          {{ item.project }}: {{ item.start }} - {{ item.end }}
        </li>
      </ul>
      <nuxt-link :to="`/members/${id}/activities`">
        <UButton color="yellow" label="Edit activities" class="mt-2" />
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
