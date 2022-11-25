<template>
    <NLink to="/" class="main-logo">
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
<script>
export default {
  methods: {
    longpresse() {
      var hold = document.querySelector(".main-logo");
      var GSAP = this.$gsap;
      var STORE = this.$store;
      var animation = GSAP.timeline({ paused: true, onComplete: function() { hold.removeEventListener("mouseup", reverseAnimation); animation.to('#progress', {stroke:"white", duration: 1}); } });
      animation.to( '#progress', { stroke:"black", strokeDashoffset: "0", duration: 3, 
        onComplete: () => { 
          animation.kill();
          setTimeout(() => { STORE.dispatch("actSecret"); }, "1000")
        } 
      });
      
      function reverseAnimation() { animation.reverse(); } 

      hold.addEventListener("mousedown", function() {animation.play();});
      hold.addEventListener("mouseup", reverseAnimation);
    }
  },
  mounted() {
    this.longpresse();
  },
  computed: {
    secret() {return this.$store.getters['getSecret'] }
  },
}
</script>
