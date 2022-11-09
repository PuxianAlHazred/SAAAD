<template>
    <main id="saaad-laboratory" class="overflow-x-hidden">
  
          <main-works class=""/>
          <Ui-footer />
  
    </main>
  </template>
  
  <script>
    import {mapActions} from 'vuex'
    export default {
      data: () => ({
      }),
      transition: {
          name: 'page',
          mode: 'out-in',
          enter() {
            console.log( `%c SAAAD %c pages/index.vue %c 📄 Enter 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
          },
          beforeLeave() {
            console.log( `%c SAAAAD %c pages/index.vue %c 📄 beforeLeave 🔴"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
          }
      },
      computed: {
      },
      methods: {
        animateOnScroll() {
          console.log( `%c PIKS-L %c pages/index.vue %c 📓 animateOnScroll() 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
          const gsap = this.$gsap;
          const ScrollTrigger = this.$ScrollTrigger;
  
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
        },
      },
      mounted() {
        //this.animateOnScroll();
      }
    }
  </script>
  