<template>
      <aside class="bg-secondary grid ease-linear items-center transform  left-0 fixed h-screen w-full transition-all duration-500 z-[1000]" 
    :class="{
        'opacity-100 top-0': this.$store.state.secret,
        '-top-full opacity-0': !this.$store.state.secret
    }" @click="actSecret()" >
      <span class="text-white">SECRET</span>
    </aside>  
</template>
<style lang="postcss" scooped>
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
        actSecret: 'actSecret',
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
  