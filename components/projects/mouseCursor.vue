<template>
    <svg class="follower text-white" height="20" width="20">
        <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="0" fill="currentColor" />
    </svg> 
</template>
<style lang="postcss" scooped>
    .follower { @apply pointer-events-none z-[1002] w-[20px] h-[20px] fixed top-0 left-0 mix-blend-difference; }
</style>
<script>
  export default {
    methods: {
      followerCursor() {
        this.$gsap.set(".follower", {xPercent: -50, yPercent: -50});

        const follower = document.querySelector(".follower");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.350;
        const xSet = this.$gsap.quickSetter(follower, "x", "px");
        const ySet = this.$gsap.quickSetter(follower, "y", "px");
        window.addEventListener("mousemove", e => {    
            mouse.x = e.x;
            mouse.y = e.y;  
        });
        this.$gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, this.$gsap.ticker.deltaRatio()); 
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });

      },
    },
    mounted() {
      this.followerCursor();
    }
  }
</script>