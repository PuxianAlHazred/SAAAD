<template>
    <div class="appear-works">
        <header class="works-head sticky top-0">
            <h2><NLink to="/appearances-&-remixes">Appearances & Remixes</NLink></h2>
        </header>
        <div class="full-appear">
            <article data-year="2020">
                 <div class="year">2020</div>
            <div class="title">Dome feat. Saåad<span> <i>by</i> Sádon</span></div>
            <div class="info">[v/a "Memories of a Lost City"]</div>
            <div class="label">Tokyo Jupiter</div>
            <div class="format">compilation / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
            </article>
            <article data-year="2015">
                 <div class="year">2015</div>
            <div class="title">Once A Believer feat. Holy Strays (Saåad remix)<span> <i>by</i> Trésors</span></div>
            <div class="info">[album "Adrien"]</div>
            <div class="label">BLWBCK</div>
            <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
            </article>
            <article data-year="2014">
                 <div class="year">2014</div>
            <div class="title">La Traversée (Saåad remix)<span> <i>by</i> Oiseaux-Tempête</span></div>
            <div class="info">[album "Re-Works"]</div>
            <div class="label">Sub-Rosa</div>
            <div class="format">vinyl / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
            </article>
            <article data-year="2013">
                 <div class="year">2013</div>
            <div class="title">If You Call That Living feat. Saåad<span> <i>by</i> Sundrugs</span></div>
            <div class="info">[album "Hidden Scenes"]</div>
            <div class="label">BLWBCK</div>
            <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
            </article>
            <article data-year="2012">
                 <div class="year">2012</div>
            <div class="title">Disillusioned Infinity feat. Romain Barbot<span> <i>by</i> Appalache</span></div>
            <div class="info">[album "Fue"]</div>
            <div class="label">BLWBCK</div>
            <div class="format">cassette / digital</div>
        <svg height="50" width="100%">
          <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
        </svg>
            </article>
        </div>
    </div>
</template>
<style lang="postcss" scooped>

.appear-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
.appear-nav span { @apply opacity-30 duration-1000 ;}
.appear-nav span:hover { @apply opacity-100 duration-1000 cursor-pointer;}

.full-appear{ @apply mb-20; }

.full-appear .curtain { @apply w-full h-full absolute z-40 bg-black;}
.full-appear article { @apply flex  overflow-hidden justify-between items-center duration-1000 transition-all py-4;}
.full-appear article:hover { @apply border-white duration-1000  transition-all; }
.full-appear article svg { @apply group-hover:opacity-100 opacity-50 absolute w-full h-[50px] duration-1000 transition-all z-0; }
.full-appear article svg rect{ @apply duration-1000 transition-all;}
.full-appear article:hover svg{ filter:url(#pixelateMin);}

.full-appear article .year, .full-appear article .title, .full-appear article .info, .full-appear article .label, .full-appear article .format{ @apply z-[1] bg-black duration-500 transition-all text-secondary font-work cursor-crosshair; } 
.full-appear article:hover .year, .full-appear article:hover .info, .full-appear article:hover .format { @apply text-white; } 
.full-appear article .year{ @apply pr-2 text-[1.5em]; } 
.full-appear article .title{ @apply text-[22px] text-white p-4 font-light; } 
.full-appear article .info{ @apply p-2; } 
.full-appear article .label{ @apply text-sm italic text-white p-2; }
.full-appear article .format{ @apply pl-2; }
.full-appear article:hover .title {@apply px-20;} 
.full-appear article:hover a.title {filter:url(#pixelateMin);}
.full-appear article:hover .label {@apply px-10 delay-75;} 

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
                gsap.utils.toArray(".full-appear article").forEach((e,i) => {
                //this.$gsap.to(e, { delay: '0.1', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}); 
                const section = document.querySelector('.full-appear');
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

    }
</script>
    
  