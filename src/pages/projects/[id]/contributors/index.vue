<template>
  <UContainer>
    <ProjectUpdateContributors
      :id="updateContributors.id"
      :name="updateContributors.name"
      :version="updateContributors.version"
      :contributors="updateContributors.contributors"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockContributors } from '~/mock/projects'

const updateContributors = ref(mockContributors)
</script>
