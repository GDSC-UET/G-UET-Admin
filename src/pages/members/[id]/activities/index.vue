<template>
  <UContainer>
    <MemberActivities
      :name="memberActivities.name"
      :position="memberActivities.position"
      :activities="memberActivities.activities"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockMemberActivities } from '~/mock/members'

const memberActivities = ref(mockMemberActivities)
</script>
