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
.works-head h3 { @apply italic text-5xl font-meno font-light mr-8 inline z-10; }

 #works i { @apply text-sm ml-2 text-primary italic; }

@keyframes event-curtain {
  0% {
    width: 100%;
    height:100%;
  }
  100% {
    width: 0;
    height: 0;
  }
}
</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    scrollToTop: true,
    head: {
      title: "Saåad",
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
          console.log( `%c SAAAD %c pages/works.vue %c 📄 Enter 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
        },
        beforeLeave() {
          console.log( `%c SAAAAD %c pages/works.vue %c 📄 beforeLeave 🔴"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')
        }
    },
    mounted() {
      console.log( `%c SAAAD %c pages/works.vue %c 📓 mounted() 🟢"`, 'background:#FFF000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000000', 'background:#000000 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #ffffff', 'background:transparent')

    }
  }
</script>
  