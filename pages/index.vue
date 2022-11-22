<template>
  <main id="saaad-laboratory">
    <projects-cover />
  </main>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    scrollToTop: true,

    data: () => ({
    }),
    transition: {
      name: 'page_transition',
        mode: 'in-out',
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
    },
    mounted() {
      console.log( `%c SAAAD %c pages/index.vue %c 📓 mounted() 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
    }
  }
</script>
