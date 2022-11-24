<template>

    <div v-if="preloading" class="preloader">
      <div class="loading" >
        <svg width="300" height="200" viewbox="0 0 300 200">
          <g id="hold">
            <text id="enter" class="font-work tracking-widest uppercase textEnter text-lg cursor-crosshair" x="150" y="85" fill="white" text-anchor="middle">Clic here to enter !</text>
            <text class="font-work textWarning" x="150" y="125" fill="#666" text-anchor="middle">Warning : This website use sounds !</text>
            <rect class="noProgressBar pixelateMin" width="50" height="2" y="100" x="125" fill="#666666"/>
            <rect class="onProgressBar " width="0" height="2" y="100" x="125" fill="white"/>
          </g>
        </svg>
        <div class="loading-text text-justify font-work cursor-wait">
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
      <audio class="invisible hidden" id="sound1" volume="0" :src="require(`~/assets/sounds/intro.ogg`).default" /> 
    </div>

</template>
<style lang="postcss">
  .preloader{
    position:fixed;
    left:0;
    top:0;
    height:100vh;
    width:100vw;
    z-index:101;
  }
  #progress { 
    @apply stroke-2 stroke-current text-white;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
  .stroke-loading{
    animation: stroke 3s ease-out forwards;
  }
  @keyframes stroke {
    to {
      stroke-dashoffset: 0;
    }
  }
  .loading {
    display:flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 999;
  }
  .loading-text {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    width: 300px;
    height: 200px;
    line-height: 100px;
  }
  .loading-text span {
    display: inline-block;
    margin: 0 2.5px;
    color: #fff;
  }
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
        console.log('appear')
        this.$gsap.to('.onProgressBar', { width: "50", duration: 3 });
        this.$gsap.from('.textWarning', { y: "20", opacity:0 , delay: 3 });
        //this.$gsap.to('#hold rect', { height: "0", opacity:0 , delay: 4 });
        this.$gsap.to('.loading-text', { opacity:0 , display: 'none',delay: 5 });
        this.$gsap.from('.textIntro', { filter: "blur(100px)", opacity:0 , delay: 5.5 });
        //this.$gsap.to('.textWarning', { y: "20", opacity:0 , delay: 5 });
        this.$gsap.from('.textEnter', { y: "-20", opacity:0 , delay: 5 });
      },
      shortpress() {
        const audio = document.querySelector("#sound1");
          audio.volume = 0;
          audio.loop = true;
        function pauseSound(){ audio.pause(); }
        var short = document.querySelector("#enter");
        var GSAP = this.$gsap;
        var STORE = this.$store;
        var animation = this.$gsap.timeline({
          paused: true,
          onComplete: function() {
            animation.to('#progress', {stroke:"white", duration: 0.5});
          }
        });
        animation.to( '#progress', { strokeDashoffset: "0", duration: 1, onComplete: () => { 
          GSAP.to('.preloader', { opacity: 0, display: "none", duration: 1});
              //GSAP.to('body', { delay: 1,   onComplete: () => { STORE.dispatch("actPreloading");  }});
              animation.kill();
              audio.play();
              GSAP.to(audio, 1, {volume:0.5, onComplete:pauseSound} );
          setTimeout(() => { 
              STORE.dispatch("actPreloading"); 
              STORE.dispatch("actContent"); 
            }, "1000")
        } });
        short.addEventListener("mousedown", function() {animation.play();});
      }
    },
    mounted() {
      this.appear();
      this.shortpress();
    },
    computed: {
      preloading() {
        return this.$store.getters['getPreloading']
      },

    },
  }
</script>
