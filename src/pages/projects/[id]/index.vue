<template>
  <UContainer>
    <ProjectDetail
      :id="projectDetail.id"
      :name="projectDetail.name"
      :version="projectDetail.version"
      :description="projectDetail.description"
      :github="projectDetail.github"
      :product="projectDetail.product"
      :contributors="projectDetail.contributors"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { mockProject } from '~/mock/projects'

const projectDetail = ref(mockProject)
</script>
