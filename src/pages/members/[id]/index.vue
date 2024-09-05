<template>
  <UContainer>
    <MemberDetail
      :id="memberDetail.id"
      :name="memberDetail.name"
      :avatar="memberDetail.avatar"
      :email="memberDetail.email"
      :school="memberDetail.school"
      :position="memberDetail.position"
      :team="memberDetail.team"
      :joined-at="memberDetail.joinedAt"
      :gen="memberDetail.gen"
      :about-this-member="memberDetail.aboutThisMember"
      :facebook="memberDetail.facebook"
      :github="memberDetail.github"
      :linkedin="memberDetail.linkedin"
      :awards="memberDetail.awards"
      :activities="memberDetail.activities"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockMember } from '~/mock/members'

const memberDetail = ref(mockMember)
</script>
