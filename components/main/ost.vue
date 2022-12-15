<template>
  <div>
    <div class="ost-works">
      <header class="works-head">
        <h2><NLink to="/original-soundtracks">Original Soundtracks</NLink></h2>
      </header>
      <div class="full-ost">
        <article data-year="2022">
           <div class="year">2022</div>
          <nuxt-link to="original-soundtracks/topos" class="title">Topos<span> <i>by</i> Max Bondendorf</span></nuxt-link>
          <div class="label">/</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
        <article data-year="2021">
           <div class="year">2021</div>
          <div class="title">A-HORA<span> <i>by</i> Klara Ravat</span></div>
          <div class="label">Klankvorm</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
        <article data-year="2019">
           <div class="year">2019</div>
          <div class="title">Sphinx<span> <i>by</i> Tito Gonzalez Garcia</span></div>
          <div class="label">Tamara Films</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
        <article data-year="2019">
           <div class="year">2019</div>
          <div class="title">Les Oracles<span> <i>by</i> Tito Gonzalez Garcia</span></div>
          <div class="label">Tamara Films</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
        <article data-year="2016">
           <div class="year">2016</div>
          <div class="title">Elijah<span> <i>by</i> Fanny Béguély</span></div>
          <div class="label">ESAV</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
        <article data-year="2015">
           <div class="year">2015</div>
          <div class="title">Tattoo<span> <i>by</i> Frédéric Jolivet</span></div>
          <div class="label">Monsieur Linéa</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
      </div>
    </div>
    <div class="st-works">
      <header class="works-head">
        <h2><NLink to="/original-soundtracks">Soundtracks</NLink></h2>
      </header>
      <div class="full-ost">
        <article data-year="2021">
           <div class="year">2021</div>
          <div class="title">Brigidy Bram: The Kendal Hanna Story<span> <i>by</i> Laura Gamse & Toby Lunn</span></div>
          <div class="label">Daydream Reels</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
        <article data-year="2014">
           <div class="year">2014</div>
          <div class="title">We Must Remain The Wildhearted Outsiders<span> <i>by</i> Chase Lisbon</span></div>
          <div class="label">Monolake Media</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
        <article data-year="2011">
           <div class="year">2011</div>
          <div class="title">L'Ambianceur<span> <i>by</i> As Human Pattern</span></div>
          <div class="label">/</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        </article>
      </div>
    </div>
  </div>
</template>
<style lang="postcss">

  .ost-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
  .ost-nav span { @apply opacity-30 duration-1000 ;}
  .ost-nav span:hover { @apply opacity-100 duration-1000 cursor-pointer;}
  .st-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
  .st-nav span { @apply opacity-30 duration-1000 ;}
  .st-nav span:hover { @apply opacity-100 duration-1000 cursor-pointer;}

  .full-ost { @apply flex flex-col mb-20; }
  .full-ost .curtain { @apply w-full h-full absolute z-40 bg-black;}
  .full-ost article { @apply flex h-[50px] overflow-hidden justify-between items-center duration-500 transition-all}
  .full-ost article svg { @apply group-hover:opacity-100 opacity-50 absolute w-full h-[50px] duration-1000 transition-all z-0; }
  .full-ost article svg rect{ @apply duration-1000 transition-all;}
  .full-ost article .year, .full-ost article .title, .full-ost article .label { @apply z-[1] bg-black duration-500 transition-all  font-work cursor-crosshair; } 
  .full-ost article .year{ @apply pr-2 text-[1.5em] text-secondary; } 
  .full-ost article .title{ @apply text-[22px] text-white p-4 font-light; } 
  .full-ost article .label{ @apply text-sm italic text-secondary pl-2; }
  
  .full-ost article:hover { @apply border-white duration-1000  transition-all; }
  .full-ost article:hover .year{ @apply text-white; } 
  .full-ost article:hover .label{ @apply text-white; } 
  .full-ost article:hover .title {@apply px-20 ;} 
  .full-ost article:hover a.title {filter:url(#pixelateMin);
  }
  .full-st { @apply flex flex-col mb-20; }
  .full-st .curtain { @apply w-full h-full absolute z-40 bg-black;}
  .full-st article { @apply flex h-[50px] overflow-hidden justify-between items-center duration-500 transition-all}
  .full-st article svg { @apply group-hover:opacity-100 opacity-50 absolute w-full h-[50px] duration-1000 transition-all z-0; }
  .full-st article svg rect{ @apply duration-1000 transition-all;}
  .full-st article .year, .full-ost article .title, .full-ost article .label { @apply z-[1] bg-black duration-500 transition-all  font-work cursor-crosshair; } 
  .full-st article .year{ @apply pr-2 text-[1.5em] text-secondary; } 
  .full-st article .title{ @apply text-[22px] text-white p-4 font-light; } 
  .full-st article .label{ @apply text-sm italic text-secondary pl-2; }
  
  .full-st article:hover .title {@apply px-20 ;} 
  .full-st article:hover a.title {filter:url(#pixelateMin);}
  .full-st article:hover { @apply border-white duration-1000  transition-all; }
  .full-st article:hover .year{ @apply text-white; } 
  .full-st article:hover .label{ @apply text-white; } 
</style>
<script>
  export default {
    data() {
      return {
        content: false,
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
        var scrolltrigger = this.$ScrollTrigger;
        gsap.utils.toArray(".full-ost article").forEach((e,i) => {
          //this.$gsap.to(e, { delay: '0.1', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}); 
          const section = document.querySelector('.full-ost');
          scrolltrigger.create({
              trigger: e,
              start: "top bottom+=50",
              end: "bottom start-=50",
              onEnter: () => gsap.to(e, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}),
              onEnterBack: () => gsap.to(e, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}),
              onLeave: () => gsap.to(e, {clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}),
              onLeaveBack: () => gsap.to(e, {clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}),
          });
          
        });
        gsap.utils.toArray(".full-st article").forEach((e,i) => {
          //this.$gsap.to(e, { delay: '0.1', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}); 
          const section = document.querySelector('.full-st');
          scrolltrigger.create({
              trigger: e,
              start: "top bottom+=50",
              end: "bottom start-=50",
              onEnter: () => gsap.to(e, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}),
              onEnterBack: () => gsap.to(e, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}),
              onLeave: () => gsap.to(e, {clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}),
              onLeaveBack: () => gsap.to(e, {clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}),
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
  
