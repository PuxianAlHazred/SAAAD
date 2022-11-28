<template>
    <NLink to="/" class="main-logo">
      <projects-secret />
      <svg width="155" height="155" viewbox="0 0 155 155">
        <g id="hold">
          <circle cx="77.5" cy="77.5" r="75" stroke-width="1px" stroke="#FFFFFF" fill-opacity="0" />
          <circle id="progress" class="circle" cx="77.5" cy="77.5" r="75" stroke-width="2px" stroke="white" fill-opacity="0"/>
        </g>
      </svg>
      <h1>Saåad</h1>
    </NLink>
</template>
<style lang="postcss">
  .main-logo { 
    @apply 
    ml-10 
    text-white 
    font-light 
    flex 
    items-center 
    justify-center 
    w-[155px] 
    h-[155px] 
    z-[1001] 
    text-[40px] 
    tracking-wider
    font-hoefler;
  }
  .main-logo svg {@apply absolute}
</style>