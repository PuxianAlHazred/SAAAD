<template>
    <header class="main-header">
        <Ui-logo/>
        <nav  @click="actMenu()">MENU</nav>
        <div id="muted" @click="actMuted()">
          <svg id="wave" :class="{ 'opacity-100': !this.$store.state.muted, 'opacity-50 stopAnimate': this.$store.state.muted }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38.05">
            <path class="Line_1" data-name="Line 1" d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"/>
            <path class="Line_2" data-name="Line 2" d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"/>
            <path class="Line_3" data-name="Line 3" d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"/>
            <path class="Line_4" data-name="Line 4" d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"/>
            <path class="Line_5" data-name="Line 5" d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"/>
            <path class="Line_6" data-name="Line 6" d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"/>
            <path class="Line_7" data-name="Line 7" d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"/>
            <path class="Line_8" data-name="Line 8" d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"/>
            <path class="Line_9" data-name="Line 9" d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"/>
          </svg>
          <span :class="{'text-primary': this.$store.state.muted, 'text-black': !this.$store.state.muted}">muted</span>
        </div>
    </header>
</template>
<style lang="postcss" scooped>
  .main-header { @apply  pb-20 pt-2 flex justify-between flex-col fixed items-center h-screen w-[150px] top-0 left-0 z-[1000] mix-blend-difference bg-transparent;}
  .main-header nav { @apply -rotate-90 text-[15px] font-work text-white;}

  .main-header #wave { @apply h-[25px] w-[25px] fill-current text-white; }
  .main-header #muted span { @apply transition-colors duration-1000 font-mono text-[10px] fixed bottom-14 left-0 w-[150px] text-center tracking-widest; }
  .main-header .stopAnimate .Line_1, .stopAnimate .Line_2,.stopAnimate .Line_3,.stopAnimate .Line_4,.stopAnimate .Line_5,.stopAnimate .Line_6,.stopAnimate .Line_7,.stopAnimate .Line_8,.stopAnimate .Line_9{ animation:none!important; transform: scaleY(0.3)!important;transform-origin: center!important;}
  .main-header #wave .Line_1 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 0.15s; animation-delay: 0.15s;
  }
  .main-header #wave .Line_2 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 0.3s; animation-delay: 0.3s;
  }
  .main-header #wave .Line_3 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 0.45s; animation-delay: 0.45s;
  }
  .main-header #wave .Line_4 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 0.6s; animation-delay: 0.6s;
  }
  .main-header #wave .Line_5 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 0.75s; animation-delay: 0.75s;
  }
  .main-header #wave .Line_6 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 0.9s; animation-delay: 0.9s;
  }
  .main-header #wave .Line_7 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 1.05s; animation-delay: 1.05s;
  }
  .main-header #wave .Line_8 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 1.2s; animation-delay: 1.2s;
  }
  .main-header #wave .Line_9 {
    -webkit-animation: pulse 1s infinite; animation: pulse 1s infinite;
    -webkit-animation-delay: 1.35s; animation-delay: 1.35s;
  }
  @-webkit-keyframes pulse {
    0% { transform: scaleY(1); transform-origin: 50% 50%; }
    50% { transform: scaleY(0.7); transform-origin: 50% 50%; }
    100% { transform: scaleY(1); transform-origin: 50% 50%; }
  }
  @keyframes pulse {
    0% { transform: scaleY(1); transform-origin: 50% 50%; }
    50% { transform: scaleY(0.7); transform-origin: 50% 50%; }
    100% { transform: scaleY(1); transform-origin: 50% 50%; }
  }
</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: "saaad-heading", 
    data() {
      return {
        content: false,
      }
    },
    methods: {
      ...mapActions({ 
        actMuted: 'actMuted',
        actMenu: 'actMenu' 
      }),
      afterEnter(el) {
        this.content = true
      },
      beforeLeave(el) {
        this.content = false
      },
      animateOnScroll() {
      },
    },
    mounted() {
      this.$gsap.from(".main-header", {width:'0px', duration:1, opacity: '0',ease:"power2.easeOut"});
      this.$gsap.from(".main-logo", {y: -10, duration:0.5, delay: 1 , opacity: '0', ease:"power2.easeOut"});
      this.$gsap.from(".main-header nav", {x: -10, duration:0.5, delay: 1.25 , opacity: '0', ease:"power2.easeOut"});
      this.$gsap.from(".main-header #muted", { duration:0.5, delay: 1.5 , opacity: '0', ease:"power2.easeOut"});

    },
    computed: {
      isSoundEnabled() {
        return this.$store.state.muted;
      }
    }
  }
</script>
  