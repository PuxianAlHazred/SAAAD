<template>
    <header class="main-header">
        <Ui-logo class="mix-blend-difference"/>
        <button @click="actMenu()">
          <svg v-if="this.$store.state.menu === false" class="h-[49px] w-[49px] fill-current text-white" viewBox="0 0 49 49">
              <path d="m34 21v1h-19v-1zm-5 3v1h-9v-1zm5 3v1h-19v-1z"></path>
          </svg>
          <svg v-if="this.$store.state.menu === true" class="h-[49px] w-[49px] fill-current scale-x-150 text-white" viewBox="0 0 49 49">
              <path d="m34 21v1h-19v-1zm-5 3v1h-9v-1zm5 3v1h-19v-1z"></path>
          </svg>
        </button>
        <div id="muted" @click="actMuted()" :class="[{ 'muted' : this.$store.state.muted === true, 'notmuted' : this.$store.state.muted === false }]">
          <svg id="wave" :class="{ 'opacity-100': !this.$store.state.muted, 'opacity-50 stopAnimate': this.$store.state.muted }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
            <path class="Line_9" d="m36 23h1v4h-1z"/>
            <path class="Line_8" d="m33 20h1v10h-1z"/>
            <path class="Line_7" d="m30 15h1v20h-1z"/>
            <path class="Line_6" d="m27 20h1v10h-1z"/>
            <path class="Line_5" d="m24 23h1v4h-1z"/>
            <path class="Line_4" d="m21 20h1v10h-1z"/>
            <path class="Line_3" d="m18 15h1v20h-1z"/>
            <path class="Line_2" d="m15 20h1v10h-1z"/>
            <path class="Line_1" d="m12 23h1v4h-1z"/>
          </svg>
          <span :class="{'text-primary': this.$store.state.muted, 'text-black': !this.$store.state.muted}">muted</span>
          <svg class="svg-filter">
            <defs>
              <linearGradient id="GradientLine" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop stop-color="#666" offset="0%" />
                    <stop stop-color="#ccc" offset="50%" />
                    <stop stop-color="#666" offset="100%" />
                  </linearGradient>
              <!-- Pixelisations (animated) -->
              <filter id="pixelateMax" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox">
                <feTurbulence id="feTurbulenceMax" type="turbulence" baseFrequency="0.0006" numOctaves="1" seed="8" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="G" yChannelSelector="B" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
                <animate xlink:href="#feTurbulenceMax" attributeName="baseFrequency" dur="10000s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>
              </filter>
              <filter id="pixelateMin" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox">
                <feTurbulence id="feTurbulenceMin" type="fractalNoise" baseFrequency="0.0006" numOctaves="1" seed="8" stitchTiles="noStitch" x="-10%" y="-10%" width="120%" height="120%"></feTurbulence> 
                <feDisplacementMap in="SourceGraphic" in2="fractalNoise" scale="20" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap> 
                <animate xlink:href="#feTurbulenceMin" attributeName="baseFrequency" dur="10000s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>
              </filter>
              <filter id="pixelateOnScroll" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
                <feTurbulence id="feTurbulenceScroll" type="turbulence" baseFrequency="0.0000006" numOctaves="1" seed="8" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
                <feDisplacementMap id="feDisplacementMapScroll" in="SourceGraphic" in2="turbulence" scale="0" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
                <animate xlink:href="#feTurbulenceScroll" attributeName="baseFrequency" dur="6s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>
              </filter>
              <filter id="pixelateOnSlide" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
                <feTurbulence id="feTurbulenceSlide" type="fractalNoise" baseFrequency="0.0000006" numOctaves="1" seed="8" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
                <feDisplacementMap id="feDisplacementMapSlide" in="SourceGraphic" in2="fractalNoise" scale="20" xChannelSelector="B" yChannelSelector="B" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
                <animate xlink:href="#feTurbulenceSlide" attributeName="baseFrequency" dur="10s" keyTimes="0;0.5;1" values="1000;5.1;1000;" repeatCount="indefinite"></animate>
                <animate xlink:href="#feTurbulenceSlide" attributeName="numOctaves" dur="10s" keyTimes="0;0.5;1" values="10;5.1;10;" repeatCount="indefinite"></animate>

              </filter>
              <!-- Distortions (animated) -->
              <filter id="distortion-1">
                <feTurbulence baseFrequency=".015" type="fractalNoise"/>
                <feColorMatrix type="hueRotate" values="0">
                  <animate attributeName="values" from="0" to="360" dur="1s" repeatCount="indefinite"/>
                </feColorMatrix>
                <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="2">
                  <animate attributeName="scale" values="0;2;5;0" dur="30s" repeatCount="indefinite"/>
                </feDisplacementMap>
                <feGaussianBlur stdDeviation="3"/>
                <feComponentTransfer result="main">
                  <feFuncA type="gamma" amplitude="150" exponent="5"/>
                </feComponentTransfer>
                <feColorMatrix type="matrix" 
                              values="0 0 0 0 0 
                                      0 0 0 0 0
                                      0 0 0 0 0
                                      0 0 0 1 0"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite operator="over" in="main"/>
              </filter>
              <filter id="distortion-2">
                <feTurbulence id="feTurbulenceDistortion2" baseFrequency="0.050" type="fractalNoise"/>
                <feColorMatrix type="hueRotate" values="0">
                  <animate attributeName="values" from="0" to="360" dur="6s" repeatCount="indefinite"/>
                </feColorMatrix>
                <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="10">
                  <animate id="feDisplacementMapDistortion2" attributeName="scale" values="0" dur="6s" repeatCount="indefinite"/>
                </feDisplacementMap>
                <feGaussianBlur stdDeviation="0.1"/>
                <feComponentTransfer result="main">
                  <feFuncA type="gamma" amplitude="150" exponent="5"/>
                </feComponentTransfer>
                <feColorMatrix type="matrix"
                                values="0 0 0 0 0
                                        0 0 0 0 0
                                        0 0 1 0 1
                                        0 0 0 0 0"/>
                <feGaussianBlur stdDeviation="50"/>
                <feComposite operator="over" in="main"/>
              </filter>
              <filter id="distortion-3">
                <feTurbulence  baseFrequency="0.0400" type="fractalNoise"/>
                <feColorMatrix type="hueRotate" values="0">
                  <animate attributeName="values" from="0" to="360" dur="10s" repeatCount="indefinite"/>
                </feColorMatrix>
                <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="10" >
                  <animate attributeName="scale" values="6" dur="10s" repeatCount="indefinite"/>
                  </feDisplacementMap>
                <feGaussianBlur stdDeviation="0"/>
                <feComponentTransfer result="main">
                  <feFuncA type="gamma" amplitude="150" exponent="5"/>
                </feComponentTransfer>
                <feColorMatrix type="matrix"
                                values="0 0 0 0 0
                                        0 0 0 0 0
                                        0 0 1 0 1
                                        0 0 0 0 0"/>
                <feGaussianBlur stdDeviation="0"/>
                <feComposite operator="over" in="main"/>
              </filter>
              <filter id="distortion-4">
                <feTurbulence id="feTurbulenceDistortion" type="turbulence" baseFrequency="0.6" numOctaves="8" seed="40" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100vh"></feTurbulence> 
                <feDisplacementMap id="feDisplacementMapDistortion" in="SourceGraphic" in2="turbulence" scale="5" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100vh" filterUnits="userSpaceOnUse"></feDisplacementMap> 
                <animate xlink:href="#feTurbulenceDistortion" attributeName="baseFrequency" dur="6s" keyTimes="0;0.5;1" values="1000;5.1;1000;" repeatCount="indefinite"></animate>
              </filter>
              <filter id="distortion-5">
                <feTurbulence id="feTurbulenceDistortion5" baseFrequency="0.050" type="fractalNoise"/>
                <feColorMatrix type="hueRotate" values="0">
                  <animate attributeName="values" from="0" to="360" dur="6s" repeatCount="indefinite"/>
                </feColorMatrix>
                <feDisplacementMap in="SourceGraphic" xChannelSelector="R" yChannelSelector="B" scale="10">
                  <animate id="feDisplacementMapDistortion5" attributeName="scale" values="0" dur="6s" repeatCount="indefinite"/>
                </feDisplacementMap>
                <feGaussianBlur stdDeviation="0.1"/>
                <feComponentTransfer result="main">
                  <feFuncA type="gamma" amplitude="150" exponent="5"/>
                </feComponentTransfer>
                <feColorMatrix type="matrix"
                                values="0 0 0 0 0
                                        0 0 0 0 0
                                        0 0 1 0 1
                                        0 0 0 0 0"/>
                <feGaussianBlur stdDeviation="50"/>
                <feComposite operator="over" in="main"/>
              </filter>
              <!-- Others -->
              <filter id="noise">
                <feOffset in="SourceGraphic" dx="-8" dy="-8" result="offset" />
                <feGaussianBlur in="offset" stdDeviation="64" result="blur" />
                <feTurbulence result="waves" type="turbulence" baseFrequency="0.735 0.771" numOctaves="1" seed="6"></feTurbulence>
                <feDisplacementMap in="blur" in2="waves" scale="20" xChannelSelector="R" yChannelSelector="B" result="ripples"></feDisplacementMap>
                <feComposite in="waves" in2="ripples" operator="arithmetic" k1="1" k2="0" k3="1" k4="0"></feComposite>
              </filter>
              <filter id="teal-white" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feColorMatrix type="matrix" values=".33 .33 .33 0 0
                          .33 .33 .33 0 0
                          .33 .33 .33 0 0
                          0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
                <feComponentTransfer in="colormatrix" result="componentTransfer">
                      <feFuncR type="table" tableValues="1 0.98"/>
                  <feFuncG type="table" tableValues="1 0.96"/>
                  <feFuncB type="table" tableValues="1 0.6"/>
                  <feFuncA type="table" tableValues="0 1"/>
                  </feComponentTransfer>
                <feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"/>
              </filter>
              <filter id="broken">
                <feTurbulence id="anime3" type="turbulence" baseFrequency="2 8" numOctaves="2" seed="2" stitchTiles="stitch" result="turbulence"/>
                <feColorMatrix type="saturate" values="30" in="turbulence" result="colormatrix"/>
                <feColorMatrix type="matrix" values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 150 -15" in="colormatrix" result="colormatrix1"/>
                <feComposite in="SourceGraphic" in2="colormatrix1" operator="in" result="composite"/>
                <feDisplacementMap in="SourceGraphic" in2="colormatrix1" scale="15" xChannelSelector="R" yChannelSelector="A" result="displacementMap"/>
              </filter>
              <filter id="pixelate">
                <feGaussianBlur stdDeviation="10" in="SourceGraphic" result="smoothed" />
                <feImage width="5" height="5" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC" result="displacement-map" />
                <feTile in="displacement-map" result="pixelate-map" />
                <feDisplacementMap in="smoothed" in2="pixelate-map" xChannelSelector="R" yChannelSelector="G" scale="1" result="pre-final"/>
                <feComposite operator="in" in2="SourceGraphic"/>
              </filter>
              <filter id="glitch" x="0" y="0">
                <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
                <feOffset in="r" result="r" dx="-5">
                  <animate attributeName="dx" attributeType="XML" values="0; -5; 0; -5; -2; -4; 0 ;-3; 0" dur="1s" repeatCount="indefinite"/>
                </feOffset>
          
                <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/>
                <feOffset in="g" result="g" dx="0" dy="0">
                  <animate attributeName="dx" attributeType="XML" values="0; 0; 0; -3; 0; 8; 0 ;-1; 0" dur="1s" repeatCount="indefinite"/>
                </feOffset>
                
                <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0.94 0 0 0  0 0 0 0 0  0 0 0 1 0" result="b"/>
                <feOffset in="b" result="b" dx="0" dy="0">
                  <animate attributeName="dx" attributeType="XML" values="0; 3; -1; 4; 0; 2; 0 ;5; 0" dur="1s" repeatCount="indefinite"/>
                </feOffset>
                
                <feBlend in="r" in2="b" mode="screen" result="blend" />
                <feBlend in="blend" in2="g" mode="screen" result="blend" />
              </filter>
              <filter id="noise">
                <feOffset in="SourceGraphic" dx="-8" dy="-8" result="offset" />
                <feGaussianBlur in="offset" stdDeviation="64" result="blur" />
                <feTurbulence result="waves" type="turbulence" baseFrequency="0.735 0.771" numOctaves="1" seed="256"></feTurbulence>
                <feDisplacementMap in="blur" in2="waves" scale="320" xChannelSelector="R" yChannelSelector="B" result="ripples"></feDisplacementMap>
                <feComposite in="waves" in2="ripples" operator="arithmetic" k1="1" k2="0" k3="1" k4="0"></feComposite>
              </filter>
            </defs> 
          </svg>
        </div>
        <ui-menu />
        <div id="gui_container" v-show="this.$store.state.secret"></div>

    </header>
</template>
<style lang="postcss" scooped>
  .main-header { @apply  pb-20 pt-[0px] flex justify-between flex-col fixed items-center h-screen w-[150px] top-0 left-0 z-[1001] bg-transparent;}
  .main-header button { @apply mix-blend-difference -rotate-90 text-[15px] font-work text-white z-[1001];}

  .main-header #muted { @apply mix-blend-difference z-[1001] cursor-pointer; }
  .main-header #muted span { @apply transition-colors duration-1000 font-mono text-[10px] fixed bottom-14 left-0 w-[150px] text-center tracking-widest; }
  .main-header #muted #wave { @apply h-[49px] w-[49px] fill-current text-white; }

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

  .svg-filter{@apply invisible w-0 h-0}
  .noise { border-radius: 50%; filter: url("#noise");}
  .pixelateMax { @apply w-auto;filter:url(#pixelateMax);}
  .pixelateMin { @apply w-auto;filter:url(#pixelateMin);}
  .pixelateOnScroll { @apply w-auto;filter:url(#pixelateOnScroll);}
  .pixelateOnSlide { @apply w-auto;filter:url(#pixelateOnSlide);}
  .distortion-1 { @apply w-auto;filter:url(#distortion-1);}
  .directGlitch { -webkit-filter: url("#glitch"); filter: url("#glitch");}
  .glitchy:hover { -webkit-filter: url("#glitch"); filter: url("#glitch");}

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
      this.$gsap.from(".main-header button", {x: -10, duration:0.5, delay: 1.25 , opacity: '0', ease:"power2.easeOut"});
      this.$gsap.from(".main-header #muted", { duration:0.5, delay: 1.5 , opacity: '0', ease:"power2.easeOut"});
      this.$store.dispatch("actSecret");   
    },
    computed: {
      isSoundEnabled() {
        return this.$store.state.muted;
      }
    }
  }
</script>
  