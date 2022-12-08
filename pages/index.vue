<template>
  <main id="saaad-laboratory">
  </main>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    scrollToTop: true,
    head: {
      title: "Saåad ☼",
      meta: [
        { hid: 'description', name: 'description', content: "Official website of the experimental & ambient musical project Saåad. Founded by Romain Barbot late 2009." }
      ],
    },
    data: () => ({
    }),
    transition: {
      name: 'fade',
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
    },
    mounted() {
      console.log( `%c SAAAD %c pages/index.vue %c 📓 mounted() 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
    }
  }
</script>
