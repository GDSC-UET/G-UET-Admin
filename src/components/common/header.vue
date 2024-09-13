<template>
  <div class="relative h-14 w-screen border-b border-gray-300 md:h-[72px] lg:hidden">
    <UContainer class="flex h-full items-center gap-4">
      <UButton icon="i-heroicons-bars-3-bottom-left" color="white" variant="soft" @click="toggle" />
      <CommonLogo class="h-5" />
    </UContainer>
    <CommonVerticalNavigation class="absolute" :class="!isNavOpen && 'hidden'" @choose="toggle" />
  </div>
</template>

<script setup lang="ts">
const isNavOpen = ref(false)

const toggle = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>
