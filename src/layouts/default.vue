<template>
  <div class="flex flex-col md:flex-row">
    <div
      class="flex hidden min-h-screen w-[250px] flex-col items-center border-r border-gray-300 md:block"
    >
      <CommonLogo class="mt-4" />
      <CommonVerticalNavigation />
    </div>
    <CommonHeader />
    <div class="grow">
      <slot />
    </div>
  </div>
</template>
