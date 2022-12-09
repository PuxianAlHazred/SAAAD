<template>
  <main id="saaad-laboratory">
    <section id="works" >
      <main-discography />
      <main-ost />
      <main-appearances />
      <Ui-footer />
      <main-events />
    </section>
    
  </main>
</template>
<style lang="postcss">

#works { @apply text-xs relative text-white; }
.works-head { @apply h-[100px] bg-black flex items-center justify-between z-10;}
.works-head h2 { @apply italic text-6xl font-meno font-light mr-8 inline z-10; }
 #works i { @apply text-sm ml-2 text-primary italic; }

</style>
<script>
  export default {
    data() {
      return {
        content: false,
        layoutDisco: 'list'
      }
    },
    methods: {
      afterEnter(el) {
        this.content = true
      },
      beforeLeave(el) {
        this.content = false
      },
      scroller() {
        var gsap = this.$gsap;
        this.$gsap.utils.toArray("article").forEach((e,i) => {
          var curtainEvent = this.$gsap.to(e, { delay: '0.1', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'});   
          this.$gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "center bottom",
                end: "center top+=99",
                invalidateOnRefresh: true,
                anticipatePin: 1,
                scrub: true,
                
                toggleActions: "play reverse play reverse",
                onEnterBack: e => {
                  curtainEvent.play();
                },
                onLeaveBack: e => {
                  curtainEvent.reverse();
                },
                onEnter: e => {
                  curtainEvent.play();
                },
                onLeave: e => {
                  curtainEvent.reverse();
                },
            }
          });
        });
      }
    },
    mounted() {
      this.scroller();
    },
    computed: {
      isSoundEnabled() {
        return this.$store.state.muted;
      }
    }
  }
</script>