<template>
  <div class="flex">
    <div class="flex min-h-screen w-[250px] flex-col items-center border-r border-gray-300">
      <CommonLogo class="mt-4" />
      <CommonVerticalNavigation />
    </div>
    <slot />
  </div>
</template>
