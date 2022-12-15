<template>
  <div v-if="preloading" class="preloader">
    <div class="loading  texture-noise">

      <svg id="hold" width="300" height="200" viewbox="0 0 300 200">
        <text class="text_Sound" x="150" y="85" text-anchor="middle">Turn up your sounds</text>
        <rect class="progress_no" width="100" height="2" y="100" x="100"/>
        <rect class="progress_on" width="0" height="2" y="100" x="100"/>
        <text class="text_Enter" x="150" y="125" text-anchor="middle">Clic here to enter</text>
      </svg>
      <div class="loading-text">
        <span class="loading-text-words">P</span>
        <span class="loading-text-words">A</span>
        <span class="loading-text-words">C</span>
        <span class="loading-text-words">I</span>
        <span class="loading-text-words">É</span>
        <span class="loading-text-words">N</span>
        <span class="loading-text-words">C</span>
        <span class="loading-text-words">I</span>
        <span class="loading-text-words">A</span>
      </div>
    </div>
    <audio id="sound-intro" volume="0" :src="require(`~/assets/sounds/intro.ogg`).default" /> 
  </div>
</template>
<style lang="postcss">
  .preloader { @apply fixed left-0 top-0 h-screen w-screen z-auto; }
  
  .preloader #sound-intro {@apply invisible hidden;}

  .loading { @apply flex flex-col-reverse justify-center items-center fixed top-0 left-0 w-full h-full z-auto bg-black transition-all duration-1000; clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);}
  .loading #hold { @apply z-[1000]; }
  .loading #hold .text_Enter{ @apply font-meno tracking-widest text-lg cursor-crosshair fill-current text-white  transition-all duration-1000; clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);}
  .loading #hold .text_Sound{ @apply font-work fill-current text-secondary  transition-all duration-1000; clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);}
  .loading #hold .progress_no{ @apply font-work fill-current text-secondary; }
  .loading #hold .progress_on{ @apply font-work fill-current text-white; }

  .loading-text { @apply font-work cursor-wait absolute flex justify-center items-center m-auto text-center w-80 h-80 leading-none; }
  .loading-text span { @apply inline-block mx-1 text-white text-lg; }
    .loading-text span:nth-child(1) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 0s infinite linear alternate;
              animation: blur-text 1.5s 0s infinite linear alternate;
    }
    .loading-text span:nth-child(2) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 0.2s infinite linear alternate;
              animation: blur-text 1.5s 0.2s infinite linear alternate;
    }
    .loading-text span:nth-child(3) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 0.4s infinite linear alternate;
              animation: blur-text 1.5s 0.4s infinite linear alternate;
    }
    .loading-text span:nth-child(4) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 0.6s infinite linear alternate;
              animation: blur-text 1.5s 0.6s infinite linear alternate;
    }
    .loading-text span:nth-child(5) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 0.8s infinite linear alternate;
              animation: blur-text 1.5s 0.8s infinite linear alternate;
    }
    .loading-text span:nth-child(6) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 1s infinite linear alternate;
              animation: blur-text 1.5s 1s infinite linear alternate;
    }
    .loading-text span:nth-child(7) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 1.2s infinite linear alternate;
              animation: blur-text 1.5s 1.2s infinite linear alternate;
    }
    .loading-text span:nth-child(8) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 1.3s infinite linear alternate;
              animation: blur-text 1.5s 1.3s infinite linear alternate;
    }
    .loading-text span:nth-child(9) {
      filter: blur(0px);
      -webkit-animation: blur-text 1.5s 1.5s infinite linear alternate;
              animation: blur-text 1.5s 1.5s infinite linear alternate;
    }
    @-webkit-keyframes blur-text {
      0% {
        filter: blur(0px);
      }
      100% {
        filter: blur(4px);
      }
    }
    @keyframes blur-text {
      0% {
        filter: blur(0px);
      }
      100% {
        filter: blur(4px);
      }
    }
</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        longpress: false,
      }
    },
    methods: {
      ...mapActions({ 
        actPreloading: 'actPreloading',
        actContent: 'actContent' 
      }),
      appear() {
        this.$gsap.to('.loading', { duration: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
        this.$gsap.to('.loading-text', { y:-20})
        this.$gsap.to('.progress_on', { delay: 1, width: "100", duration: 3 });
        this.$gsap.to('.loading-text', { delay: 3.5, opacity: 0, duration: 0.5, display:"none"})
        this.$gsap.to('.text_Sound', { delay: 3.5, duration: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
        this.$gsap.to('.text_Enter', { delay: 3.5, duration: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
      },
      shortpress() {
        const sound_intro = document.querySelector("#sound-intro");
              sound_intro.volume = 0;
              sound_intro.loop = true;
        function pauseSound(){ sound_intro.pause(); }
        function playSound(){ sound_intro.play(); }

        var short = document.querySelector(".text_Enter");
        var GSAP = this.$gsap;
        var STORE = this.$store;

        var animation = this.$gsap.timeline({ paused: true, onComplete: function() { /* Code here */ } });
        animation.to( '.progress_on', { strokeDashoffset: "0", duration: 1, onStart: () => { sound_intro.play();  GSAP.to(sound_intro, 4, {volume:0.5, onComplete:pauseSound} );},onComplete: () => { 
          console.log( `%c SAAAD %c ui/preloading.vue %c 📓 Component destroyed 🔴"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#666666 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
          this.$gsap.to('.loading', { delay: 0.5, duration: 0.5, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'})
          this.$gsap.to('.text_Sound', { duration: 0.5, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'})
          this.$gsap.to('.text_Enter', { duration: 0.5, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'})
          setTimeout(() => { 
              animation.kill();
              STORE.dispatch("actPreloading"); 
              STORE.dispatch("actContent"); 
            }, "2000")
        } });

        short.addEventListener("mousedown", function() { animation.play(); });
      }
    },
    mounted() {
      console.log( `%c SAAAD %c ui/preloading.vue %c 📓 Component mounted 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#666666 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
      this.appear();
      this.shortpress();
    },
    computed: {
      preloading() {
        return this.$store.getters['getPreloading']
      },

    }
  }
</script>
