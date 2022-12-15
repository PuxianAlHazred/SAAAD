<template>
  <main :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}">
    <Projects-mouseCursor />
    <Ui-preloading v-if="this.$store.state.preloading"/>
    <Ui-header v-if="this.$store.state.content" />
    <Nuxt v-if="this.$store.state.content" class="w-wSaaad my-0 ml-[150px] mr-[50px]"/>
  </main>
</template>
<style lang="postcss">
  html { scroll-behavior: smooth; }
  main { @apply bg-black; }
</style>
<script>
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        menu: false
      }
    },
    methods: {
      ...mapActions({ 
        actSecret: 'actSecret'
      }),
      enter() {
        console.log( `%c SAAAD %c layout/default.vue %c 📓 Layout mounted 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
        var STORE = this.$store;
        var pattern = ['s', 'a', 'a', 'a', 'd'];
        var current = 0;
        var keyHandler = function (event) {
          if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
            current = 0;
            return;
          }
          current++;
          if (pattern.length === current) {
            current = 0;
            STORE.dispatch("actSecret");           
          }
        };
        document.addEventListener('keydown', keyHandler, false);
        document.querySelectorAll("a").forEach((link) => {
            link.addEventListener('mouseenter', () => this.$gsap.to(".follower", {scale:2}));
            link.addEventListener('mouseleave', () => this.$gsap.to(".follower", {scale:1}));
            link.addEventListener('click', () => this.$gsap.to(".follower", {scale:0}) );
        });
        document.querySelectorAll("button").forEach((link) => {
            link.addEventListener('mouseenter', () => this.$gsap.to(".follower", {scale:2}));
            link.addEventListener('mouseleave', () => this.$gsap.to(".follower", {scale:1}));
            link.addEventListener('click', () => this.$gsap.to(".follower", {scale:0}) );
        });
        document.querySelectorAll(".disco-nav span").forEach((link) => {
            link.addEventListener('mouseenter', () => this.$gsap.to(".follower", {scale:2}));
            link.addEventListener('mouseleave', () => this.$gsap.to(".follower", {scale:1}));
            link.addEventListener('click', () => this.$gsap.to(".follower", {scale:0}) );
        });
        document.querySelectorAll("#muted").forEach((link) => {
            link.addEventListener('mouseenter', () => this.$gsap.to(".follower", {scale:2}));
            link.addEventListener('mouseleave', () => this.$gsap.to(".follower", {scale:1}));
            link.addEventListener('click', () => this.$gsap.to(".follower", {scale:0}) );
        });
        document.querySelectorAll(".main-logo").forEach((link) => {
            link.addEventListener('mouseenter', () => this.$gsap.to(".follower", {scale:10}));
            link.addEventListener('mouseleave', () => this.$gsap.to(".follower", {scale:1}));
            link.addEventListener('click', () => this.$gsap.to(".follower", {scale:10}) );
        });
      }
    },
    mounted() {
      this.$gsap.config({nullTargetWarn: false, trialWarn: false});
      this.enter();
    },
  }
</script>
