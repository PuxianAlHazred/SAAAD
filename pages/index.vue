<template>
  <main id="saaad-laboratory">
    <section id="works" >
      <main-discography />
      <main-ost />
      <main-appearances />
    </section>
    <Ui-footer />
  </main>
</template>
<style lang="postcss">
  #works { @apply text-xs relative text-white; }
  .works-head { @apply h-[100px] bg-black flex items-center justify-between z-10;}
  .works-head h2 { @apply italic text-6xl font-meno font-light mr-8 inline z-10; }
  #works i { @apply text-sm ml-2 text-primary italic; }
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

    },
    mounted() {

    },
    computed: {
      isSoundEnabled() {
        return this.$store.state.muted;
      }
    }
  }
</script>