<template>
  <div class="disco-works">
    <header class="works-head sticky top-0">
      <h2><NLink to="/releases">Releases</NLink></h2>
      <div class="disco-nav">
        <span class="grid ml-2 items-center" v-on:click="layoutDisco = 'grid'">
          <svg class="h-[50px] w-[25px]" :class="[{ 'text-secondary' : layoutDisco === 'list', 'text-white' : layoutDisco === 'grid' }]" x="0px" y="0px" viewBox="0 0 25 50" style="enable-background:new 0 0 25 50;">
            <path fill="currentColor" d="m9 24v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm10-3v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm-5 0v1h-3v-1zm5 6v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm-5 0v1h-3v-1zm5 6v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm-10 0v1h-3v-1zm0 0v1h-3v-1zm0 0v1h-3v-1zm0 0v1h-3v-1zm10 0v1h-3v-1zm-5 0v1h-3v-1zm5 0v1h-3v-1zm-5 0v1h-3v-1zm5 0v1h-3v-1zm0 0v1h-3v-1zm-10-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm10-3v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm-5 0v1h-3v-1zm5 6v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm-5 0v1h-3v-1zm5 6v1h-3v-1zm-5 0v1h-3v-1zm5-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1zm0-3v1h-3v-1zm0-3v1h-3v-1zm0 6v1h-3v-1z"/>
          </svg>
        </span> 
        <span class="list items-center" v-on:click="layoutDisco = 'list'">
          <svg class="h-[50px] w-[25px]" :class="[{ 'text-white' : layoutDisco === 'list', 'text-secondary' : layoutDisco === 'grid' }]" x="0px" y="0px" viewBox="0 0 25 50" style="enable-background:new 0 0 25 50;">
            <path fill="currentColor" d="m17 21v1h-9v-1zm0 3v1h-9v-1zm0 3v1h-9v-1zm-11-3v1h-3v-1zm16 0v1h-3v-1zm-16-3v1h-3v-1zm16 0v1h-3v-1zm-16 6v1h-3v-1zm16 0v1h-3v-1zm-5-6v1h-9v-1zm0 3v1h-9v-1zm0 3v1h-9v-1zm-11-3v1h-3v-1zm16 0v1h-3v-1zm-16-3v1h-3v-1zm16 0v1h-3v-1zm-16 6v1h-3v-1zm16 0v1h-3v-1z"/>
          </svg>
        </span> 
      </div>
    </header>


  
    
    <div :class="['full-disco', { 'layoutList' : layoutDisco === 'list', 'layoutGrid' : layoutDisco === 'grid' }]">
      <!--2021-->
      <article class="group" data-year="2021">
        <img v-show="layoutDisco === 'grid'" src="/img/cover/мреть(наутро ночь).jpg"/>
        <div class="year">2021</div>
        <div class="title">мреть (наутро ночь)<span> <i>as</i> Saáadon</span></div>
        <div class="info">[album]</div>
        <div class="label">Cyclic Law</div>
        <div class="format">vinyl / CD / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2021">
        <img v-show="layoutDisco === 'grid'" src="/img/cover/Secret-Hell.jpg"/>
        <div class="year">2021</div>
        <div class="title">Secret Hell</div>
        <div class="info">[v/a "L'Homme Gris"]</div>
        <div class="label">Casino Luxembourg</div>
        <div class="format">compilation / cassette</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <!--2020-->
      <article data-year="2020">
        <img v-show="layoutDisco === 'grid'" src="/img/cover/Prepared-Oasis.jpg"/>
        <div class="year">2020</div>
        <div class="title">Prepared Oasis</div>
        <div class="info">[single]</div>
        <div class="label">/</div>
        <div class="format">digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2020">
        <img v-if="layoutDisco === 'grid'" src="/img/cover/Elijah.jpg"/>
        <div class="year">2020</div>
        <div class="title">Elijah O.S.T</div>
        <div class="info">[album / ost]</div>
        <div class="label">/ – Choléra Cosmique</div>
        <div class="format">digital / CD</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2020">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/All-Lanes-Of-Lilac-Evening.jpg"/>
        <div class="year">2020</div>
        <div class="title">All Lanes Of Lilac Evening<span> <i>/w</i> Siavash Amini</span></div>
        <div class="info">[album]</div>
        <div class="label">Opal Tapes</div>
        <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <!--2019-->
      <article data-year="2019">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/мреть.jpg"/>
        <div class="year">2019</div>
        <div class="title">мреть<span> <i>as</i> Saáadon</span></div>
        <div class="info">[EP]</div>
        <div class="label">Grains Of Sand</div>
        <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <!--2018-->
      <article data-year="2018">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Orbs-And-Channels-RE.jpg"/>
        <div class="year">2018</div>
        <div class="title">Orbs & Channels</div>
        <div class="info">[remastered album]</div>
        <div class="label">Nahal Recordings</div>
        <div class="format">vinyl / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2018">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Presence-Absente.jpg"/>
        <div class="year">2018</div>
        <div class="title">Présence Absente</div>
        <div class="info">[album]</div>
        <div class="label">Hands In The Dark</div>
        <div class="format">vinyl / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <!--2016-->
      <article data-year="2016">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Verdaillon.jpg"/>
        <div class="year">2016</div>
        <div class="title">Verdaillon</div>
        <div class="info">[album]</div>
        <div class="label">In Paradisum</div>
        <div class="format">vinyl / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <!--2015-->
      <article data-year="2015">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Delayed-Summer.jpg"/>
        <div class="year">2015</div>
        <div class="title">Delayed Summer</div>
        <div class="info">[remastered album]</div>
        <div class="label">Grains Of Sand / BLWBCK</div>
        <div class="format">vinyl</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2015">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Different-Streams.jpg"/>
        <div class="year">2015</div>
        <div class="title">Different Streams <span><i>w/</i> EUS & Postdrome</span></div>
        <div class="info">[album]</div>
        <div class="label">Soft Rec. / Grains Of Sand</div>
        <div class="format">CD / cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <!--2014-->
      <article data-year="2014">

         <img v-if="layoutDisco === 'grid'" src="/img/cover/Deep-Float.jpg"/>
        <div class="year">2015</div>
        <nuxt-link to="deep-float" class="title">Deep / Float</nuxt-link>
        <div class="info">[album]</div>
        <div class="label">Hands In The Dark</div>
        <div class="format">vinyl / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
        
      </article>        
      <!--2013-->
      <article data-year="2013">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/The-Charnel-Ground.jpg"/>
        <div class="year">2013</div>
        <div class="title">The Charnel Ground</div>
        <div class="info">[split album w/ Insiden]</div>
        <div class="label">In Paradisum / BLWBCK</div>
        <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article> 
      <article data-year="2013">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Solid-Clouds.jpg"/>
        <div class="year">2013</div>
        <div class="title">Στερεά Σύννεφα</div>
        <div class="info">[album / remixes]</div>
        <div class="label">BLWBCK</div>
        <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article> 
      <article data-year="2013">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Orbs-Channels.jpg"/>
        <div class="year">2013</div>
        <div class="title">Orbs & Channels</div>
        <div class="info">[album]</div>
        <div class="label">Hands In The Dark</div>
        <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>  
      <!--2012-->
      <article data-year="2012">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Confluences.jpg"/>
        <div class="year">2012</div>
        <div class="title">Confluences</div>
        <div class="info">[album]</div>
        <div class="label">BLWBCK</div>
        <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2012">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Sustained-Layers.jpg"/>
        <div class="year">2012</div>
        <div class="title">Sustained Layers <span><i>w/</i> EUS & Postdrome</span></div>
        <div class="info">[album]</div>
        <div class="label">BLWBCK</div>
        <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2012">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Heat-Death.jpg"/>
        <div class="year">2012</div>
        <div class="title">For Small Creatures Such As We...</div>
        <div class="info">[5-ways split]</div>
        <div class="label">Heat Death</div>
        <div class="format">miniCD boxset</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article> 
      <!--2011-->
      <article data-year="2011">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Delayed-Summer.jpg"/>
        <div class="year">2011</div>
        <div class="title">Delayed Summer</div>
        <div class="info">[album]</div>
        <div class="label">BLWBCK</div>
        <div class="format">cassette digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2011">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Forget-Our-Debts.jpg"/>
        <div class="year">2011</div>
        <div class="title">Forget Our Debts</div>
        <div class="info">[v/a Sequence 2]</div>
        <div class="label">Future Sequence</div>
        <div class="format">compilation / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2011">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Arty-Empty.jpg"/>
        <div class="year">2011</div>
        <div class="title">Pink Sabbath / Raincoats</div>
        <div class="info">[EP x 2]</div>
        <div class="label">Arty Empty</div>
        <div class="format">cassette</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article> 
      <article data-year="2011">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Snowbound.jpg"/>
        <div class="year">2011</div>
        <div class="title">Snowbound / I Miss You</div>
        <div class="info">[single x 2]</div>
        <div class="label">BLWBCK / La Moustacherie</div>
        <div class="format">street USB / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article> 
      <article data-year="2011">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Recovery-Wish.jpg"/>
        <div class="year">2011</div>
        <div class="title">A Recovery Wish</div>
        <div class="info">[single]</div>
        <div class="label">Feedbackloop</div>
        <div class="format">digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article> 
      <article data-year="2011">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Raincoats.jpg"/>
        <div class="year">2011</div>
        <div class="title">Raincoats</div>
        <div class="info">[EP]</div>
        <div class="label">BLWBCK</div>
        <div class="format">digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
      <article data-year="2011">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/Pink-Sabbath.jpg"/>
        <div class="year">2011</div>
        <div class="title">Pink Sabbath</div>
        <div class="info">[EP]</div>
        <div class="label">BLWBCK</div>
        <div class="format">digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>      
      <!--2010-->
      <article data-year="2010">
         <img v-if="layoutDisco === 'grid'" src="/img/cover/it-was.jpg"/>
        <div class="year">2010</div>
        <div class="title">It Was</div>
        <div class="info">[album]</div>
        <div class="label">Lacrymal Rec. / BLWBCK</div>
        <div class="format">CD / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
      </article>
    </div>
  </div>
</template>
<style lang="postcss" scooped>
  /* Navigation du haut*/
  .disco-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
  .disco-nav span { @apply duration-500 ;}
  .disco-nav span:hover { @apply duration-500 cursor-pointer;}
  /* Full content */
  .full-disco{ @apply mb-20; }
  .full-disco article { @apply flex  overflow-hidden justify-between items-center duration-500 transition-all py-4;}
  .full-disco article:hover { @apply border-white duration-500  transition-all; }
  .full-disco article svg { @apply group-hover:opacity-100 opacity-50  duration-500 transition-all z-0; }
  .full-disco article svg rect{ @apply duration-500 transition-all;}
  .full-disco article .year, .full-disco article .title, .full-disco article .info, .full-disco article .label, .full-disco article .format{ @apply z-[1] bg-black duration-500 transition-all text-secondary font-work cursor-crosshair; } 
  .full-disco article:hover .year, .full-disco article:hover .info, .full-disco article:hover .format { @apply text-white; } 
  .full-disco article .year{ @apply pr-2 text-[1.5em]; } 
  .full-disco article .title{ @apply text-[22px] text-white p-4 font-light; } 
  .full-disco article .info{ @apply p-2; } 
  .full-disco article .label{ @apply text-sm italic text-white p-2; }
  .full-disco article .format{ @apply pl-2; }
  .full-disco article img{ @apply delay-100 duration-300 h-0; clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
  .full-disco article:hover .title {@apply px-20;} 
  .full-disco article:hover a.title {filter:url(#pixelateMin);}
  .full-disco article:hover .label {@apply px-10 delay-75;} 
  /* Grid Layout */
  .full-disco.layoutGrid{ @apply grid grid-cols-3 gap-10 h-1/3;}
  .full-disco.layoutGrid article {@apply flex-col duration-500 transition-all justify-start;}
  .full-disco.layoutGrid:hover article:not(:hover) {opacity:0.5!important;}
  .full-disco.layoutGrid article .title { @apply px-5 grid text-center leading-6}
  .full-disco.layoutGrid article:hover .title { @apply px-5}
  .full-disco.layoutGrid article .year{@apply mt-4;}
  .full-disco.layoutGrid article .format{@apply mb-4;}
  .full-disco.layoutGrid article img {@apply relative ; height:calc(33.33vw - 100px); clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);}
  .full-disco.layoutGrid article svg { @apply h-0  w-full relative; }
  /* List Layout */
  .full-disco.layoutList article svg { @apply h-[50px] w-full absolute; }
  .full-disco.layoutList{ @apply flex flex-col; }
  .full-disco.layoutList article {@apply h-auto;}

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
        var scrolltrigger = this.$ScrollTrigger;
        const s1 = document.querySelector('.disco-nav .grid');
        const s2 = document.querySelector('.disco-nav .list');
          gsap.utils.toArray(".disco-works article").forEach((e,i) => {
            //this.$gsap.to(e, { delay: '0.1', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}); 
            
            scrolltrigger.create({
                trigger: e,
                start: "top bottom+=50",
                end: "bottom start-=50",
                //markers: true,
                onEnter: () => gsap.to(e, {delay:"0.100", duration: 0.2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}),
                onEnterBack: () => gsap.to(e, {delay:"0.100", duration: 0.2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}),
                onLeave: () => gsap.to(e, {delay:"0.100", duration: 0.2, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}),
                onLeaveBack: () => gsap.to(e, {delay:"0.100", duration: 0.2, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}),
            });
          });

        s1.addEventListener("click", function() {
          scrolltrigger.refresh();
          window.scroll(0, 0);
        }); 
        s2.addEventListener("click", function() {
          scrolltrigger.refresh();
          window.scroll(0, 0);
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
  
