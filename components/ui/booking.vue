<template>
  <aside  id="aside-booking" @click="actBooking()" >
    <transition name="booking_transition" mode="in-out" tag="div" v-on:before-enter="afterEnter"  v-on:before-leave="beforeLeave">
      <div v-show="this.$store.state.booking" key="content">
        <span class="text-white">BOOKING</span>
      </div>
    </transition>
  </aside>  
</template>
<style lang="postcss" scooped>
  #aside-booking { @apply ease-linear right-[-50px] top-0 fixed transition-all duration-1000 z-[1000] w-[255px];  }
  #aside-booking div{ @apply bg-white flex flex-col items-center justify-center  h-screen  w-full ;  }
  #aside-booking span{ @apply font-hoefler text-black text-6xl tracking-wider font-light ;}
</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions({ 
        actBooking: 'actBooking',
      }),
      afterEnter(el) {
      },
      beforeLeave(el) {
      },
      animateOnScroll() {
      },
    },
    mounted() {
    }
  }
</script>
  