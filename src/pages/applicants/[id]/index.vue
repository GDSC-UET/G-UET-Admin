<template>
  <UContainer>
    <ApplicantDetail
      :id="applicantDetail.id"
      :name="applicantDetail.name"
      :status="applicantDetail.status"
      :email="applicantDetail.email"
      :phone-number="applicantDetail.phoneNumber"
      :school="applicantDetail.school"
      :position="applicantDetail.position"
      :applied-at="applicantDetail.appliedAt"
      :link-c-v="applicantDetail.linkCV"
      :notes="applicantDetail.notes ?? ''"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockApplicant } from '~/mock/applicants'

const applicantDetail = ref(mockApplicant)
</script>
