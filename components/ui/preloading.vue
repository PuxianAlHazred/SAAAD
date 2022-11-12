<template>
    <div class="preloader">
      <div class="loading">
        <div class="loading-text text-justify">
          <span class="loading-text-words">L</span>
          <span class="loading-text-words">O</span>
          <span class="loading-text-words">A</span>
          <span class="loading-text-words">D</span>
          <span class="loading-text-words">I</span>
          <span class="loading-text-words">N</span>
          <span class="loading-text-words">G</span>
        </div>
        <svg width="500" height="500" viewbox="0 0 500 500">
          <g id="hold">
            <text class="font-hoefler textIntro text-[100px]" x="250" y="275" fill="white" text-anchor="middle">Saaad</text>
            <text class="font-work textEnter" x="250" y="300" fill="white" text-anchor="middle">Press 3s to entrer</text>
            <rect width="250" height="2" y="275" x="125" fill="#151515"/>
            <rect class="onProgressBar" width="0" height="2" y="275" x="125" fill="white"/>
            <circle cx="250" cy="250" r="200" stroke-width="2px" stroke="#151515" fill-opacity="0" />
            <circle id="progress" class="circle" cx="250" cy="250" r="200" stroke-width="2px" stroke="white" fill-opacity="0"/>
          </g>
        </svg>
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
    stroke-dasharray: 1260;
    stroke-dashoffset: 1260;
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
    z-index: 9999;
  }

  .loading-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    width: 500px;
    height: 500px;
    line-height: 500px;
  }
  .loading-text span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    font-family: "Quattrocento Sans", sans-serif;
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
export default {
  data() {
    return {
      longpress: false,
    }
  },
  methods: {
    appear() {
      console.log('appear')
    }
  },
  mounted() {

    const audio = document.querySelector("#sound1");
        audio.volume = 0;
        audio.loop = true;
        function pauseSound(){ audio.pause(); }


    this.$gsap.to('.onProgressBar', { width: "250", duration: 3 });
    this.$gsap.from('.textEnter', { y: "20", opacity:0 , delay: 3 });
    this.$gsap.to('#hold rect', { height: "0", opacity:0 , delay: 4 });
    this.$gsap.to('.loading-text', { opacity:0 , delay: 5 });
    this.$gsap.from('.textIntro', { y: "-50", opacity:0 , delay: 5.5 });
    this.$gsap.to('.textEnter', { y: "20", opacity:0 , delay: 5 });

    var hold = document.querySelector(".loading");
    var GSAP = this.$gsap;
    var animation = this.$gsap.timeline({
      paused: true,
      onComplete: function() {
        hold.removeEventListener("mouseup", reverseAnimation);
        hold.removeEventListener("touchstart", reverseAnimation);
        animation.to('#progress', {filter: 'url(#pixelateMin)', stroke:"white"});
        setTimeout(() => { 
          GSAP.to('.preloader', { opacity: 0, display: "none", duration: 1 });
          animation.kill();
          audio.play();
          GSAP.to(audio, 4, {volume:0.5, onComplete:pauseSound} );
        }, "1000")

      }
    });
    animation.to( '#progress', { strokeDashoffset: "0", duration: 3 });
    hold.addEventListener("mousedown", function() {animation.play();});
    hold.addEventListener("mouseup", reverseAnimation);
    hold.addEventListener("touchstart", function() {animation.play();});
    hold.addEventListener("touchend", reverseAnimation);
    function reverseAnimation() { 
      animation.reverse(); 
    } 
  },
  computed: {
    preloading() {
      return this.$store.getters['getPreloading']
    },

  },
}
</script>
