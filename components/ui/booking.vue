<template>
      <aside class="bg-secondary grid ease-linear items-center transform  top-0 fixed h-screen w-full transition-all duration-500 z-[1000]" 
    :class="{
        'opacity-100 right-0': this.$store.state.booking,
        '-right-full opacity-0': !this.$store.state.booking
    }" @click="actBooking()" >
      <span class="text-white">BOOKING</span>
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
        actBooking: 'actBooking',
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
  