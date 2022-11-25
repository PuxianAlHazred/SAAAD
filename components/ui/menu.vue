<template>
    <aside id="aside-menu" :class="{ 'opacity-100 left-0': this.$store.state.menu, '-left-full opacity-0': !this.$store.state.menu }" @click="actMenu()" >
      <nuxt-link to="/events">events</nuxt-link>
      <nuxt-link to="/works">works</nuxt-link>
      <nuxt-link to="/albums">albums</nuxt-link>
      <nuxt-link to="/">contact</nuxt-link>
      
    </aside>  
</template>
<style lang="postcss" scooped>
  #aside-menu { @apply bg-black flex flex-col ease-linear items-end justify-center transform  top-0 fixed h-screen w-full transition-all duration-1000 z-[1000] pr-[50px];  }
  #aside-menu span{ @apply  text-secondary underline font-mono;  }
  #aside-menu a{ @apply font-hoefler text-white text-6xl tracking-wider font-light ;}
  #aside-menu a:hover{ filter:url(#pixelateMin); }
</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        content: false,
      }
    },
    methods: {
      ...mapActions({ 
        actMenu: 'actMenu',
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
    }
  }
</script>
  