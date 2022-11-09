<template>
  <transition name="loading_transition"
    v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave" v-on:leave="leave" v-on:after-leave="afterLeave"
  >
    <div v-if="preloading" class="preloader">
      <div class="loading">
        <div class="loading-text">
          <span class="loading-text-words">L</span>
          <span class="loading-text-words">O</span>
          <span class="loading-text-words">A</span>
          <span class="loading-text-words">D</span>
          <span class="loading-text-words">I</span>
          <span class="loading-text-words">N</span>
          <span class="loading-text-words">G</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="postcss">
  @mixin position-center($text-align: center) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: $text-align;
  }
  .preloader { @apply z-[100001] bg-[transparent] mx-auto fixed top-0 left-0 w-screen h-screen flex justify-between align-middle place-items-center items-center px-[3.5vw] overflow-hidden text-center; }
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999!important;
  }
  .loading-text {
    @include position-center;
    width: 100%;
    height: 100px;
    line-height: 100px;
    span {
      display: inline-block;
      margin: 0 5px;
      color: #fff;
      font-family: 'Hoefler', sans-serif;
      @for $i from 0 through 6 {
        &:nth-child(#{$i + 1}) {
          filter: blur(0px);
          animation: blur-text 1.5s (#{$i/5})+s infinite linear alternate;
        }
      }
    }
  }
  @keyframes blur-text {
    0% {filter: blur(0px);}
    100% {filter: blur(4px);}
  }
</style>
<script>
export default {
  data: () => ({
    content: false, // Boolean du contenu
  }),
  methods: {
    revealHeader() {
      console.log("revealHeader")
      //this.$gsap.to("header", { width: '150px', background:"black", ease: 'power2.linear', duration: 1, delay: 0});
    },
    start() {
        this.toggle();
        this.content = true; // Boolean du contenu = true
        // Début du chargement du component loading.vue
    },
    beforeEnter() {
      // Avant de lancer la function Enter()
    },
    enter() {

    },
    afterEnter() {
      // Aprés avoir lancer la function Enter()
      //this.$gsap.to("#circle", { ease: 'power2.linear', duration: 2, delay: 0});
    },
    finish() {
        this.content = false; // Boolean du contenu = false
        this.revealHeader();
        this.toggle();
      // Fin du chargement du component loading.vue
    },
    beforeLeave() {
        
    },
    leave() {
    },
    afterLeave() {
        this.$ScrollTrigger.refresh();
    },
    toggle() {
        this.$store.dispatch('actPreloading')
    }
  },
  computed: {
    preloading () {
      return this.$store.getters['getPreloading']
    },
  },
}
</script>
