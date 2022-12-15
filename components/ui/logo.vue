<template>
    <div class="main-logo">
      <h1><NLink to="/">Saåad</NLink></h1>

      <projects-secret />
      <svg width="155" height="155" viewbox="0 0 155 155">
        <g id="hold">
          <circle cx="77.5" cy="77.5" r="75" stroke-width="1px" stroke="#FFFFFF" fill="transparent" fill-opacity="0" />
          <circle id="progress" class="circle" cx="77.5" cy="77.5" r="75" stroke-width="2px" stroke="white" fill="transparent" fill-opacity="0"/>
        </g>
      </svg>

    </div>
</template>
<style lang="postcss">
  .main-logo { 
    @apply 
    ml-[0px]
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
  .main-logo h1 {@apply z-50 }

  .main-logo svg {@apply absolute z-40 }
</style>