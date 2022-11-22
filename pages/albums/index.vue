<template>
    <main id="saaad-laboratory">
      <section id="works" >
        <main-discography />
      </section>
      <Ui-footer />
    </main>
  </template>
  <style lang="postcss">
  
  #works { @apply text-xs relative text-white; }
  .works-head { @apply h-[100px] bg-black flex items-center justify-between z-10;}
  .works-head h2 { @apply italic text-6xl font-meno font-light mr-8 inline z-10; }
   #works i { @apply text-sm ml-2 text-primary italic; }
  
  @keyframes event-curtain {
    0% {
      width: 100%;
      height:100%;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
  </style>
  <script>
    import {mapActions} from 'vuex'
    export default {
      data: () => ({
      }),
      transition: {
          name: 'page',
          mode: 'out-in',
          enter() {
            console.log( `%c SAAAD %c pages/discography.vue %c 📄 Enter 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
          },
          beforeLeave() {
            console.log( `%c SAAAAD %c pages/discography.vue %c 📄 beforeLeave 🔴"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
          }
      },
      mounted() {
        console.log( `%c SAAAD %c pages/discography.vue %c 📓 mounted() 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
  
        var gsap = this.$gsap;
        var ScrollTrigger = this.$ScrollTrigger;
        smoothScroll("#saaad-laboratory");
        this.$gsap.utils.toArray("#works article").forEach((e,i) => {
              var curtain = e.getElementsByClassName('curtain');
              this.$gsap.to(curtain, {width: '0%' , height: '100%' , opacity: 0,duration: 0.2, ease:"power2.inOut", delay: '0.'+i});  
  
              var curtainEvent = this.$gsap.to(curtain, {width: '0%' , height: '100%' , duration: 0.5, ease:"power2.inOut", delay: '0.'+i});   
              this.$gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "center bottom",
                    end: "center top",
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
              }).fromTo(e, {  y: 0, opacity: 1, ease: "power2.inOut"}, {  y: 0, opacity: 1, ease: "power2.inOut"});
            });
        gsap.timeline({ 
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: "#works",		
            start: "top top",
            end: "bottom top",
            invalidateOnRefresh: true,
            anticipatePin: 1,
            scrub: true,
          }
        }).to("#works", { y: 0, opacity:1}, "+=0");  
        function smoothScroll(content, viewport, smoothness) {
          content = gsap.utils.toArray(content)[0];
          smoothness = smoothness || 1;
  
          gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100%", top: 0, left: 0, right: 0, bottom: 0});
          gsap.set(content, {overflow: "visible",});
  
          let getProp = gsap.getProperty(content),
            setProp = gsap.quickSetter(content, "y", "px"),
            setScroll = ScrollTrigger.getScrollFunc(window),
            removeScroll = () => content.style.overflow = "visible",
            killScrub = trigger => {
              let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
              scrub && scrub.pause();
              trigger.animation.progress(trigger.progress);
            },
            height, isProxyScrolling;
  
          function refreshHeight() {
            height = content.clientHeight;
            content.style.overflow = "visible"
            document.body.style.height = height + "px";
            return height - document.documentElement.clientHeight;
          }
  
  
  
          ScrollTrigger.addEventListener("refresh", () => {
            removeScroll();
            requestAnimationFrame(removeScroll);
          })
          ScrollTrigger.defaults({scroller: content});
          ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)
  
          ScrollTrigger.scrollerProxy(content, {
            scrollTop(value) {
              if (arguments.length) {
                isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
                setProp(-value);
                setScroll(value);
                return;
              }
              return -getProp("y");
            },
            scrollHeight: () => document.body.scrollHeight,
            getBoundingClientRect() {
              return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            }
          });
  
          var discoSpan = document.querySelector(".disco-nav");
          discoSpan.addEventListener("click", () => { refreshHeight(); });
  
          return ScrollTrigger.create({
            animation: gsap.fromTo(content, {y:0}, {
              y: () => document.documentElement.clientHeight - height,
              ease: "none",
              onUpdate: ScrollTrigger.update
            }),
            scroller: window,
            invalidateOnRefresh: true,
            start: 0,
            end: refreshHeight,
            refreshPriority: -999,
            scrub: smoothness,
            onUpdate: self => {
              if (isProxyScrolling) {
                killScrub(self);
                isProxyScrolling = false;
              }
            },
            onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
          });
        }
      }
    }
  </script>
    