<template>
    <nav class="main-menu">
    </nav>
</template>
<style lang="postcss" scooped>
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
      animateOnScroll() {
      },
    },
    mounted() {
    }
  }
</script>
  