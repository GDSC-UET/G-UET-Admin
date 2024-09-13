<template>
  <div class="flex flex-col lg:flex-row">
    <div
      class="flex hidden min-h-screen min-w-[250px] flex-col items-center border-r border-gray-300 lg:block"
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
