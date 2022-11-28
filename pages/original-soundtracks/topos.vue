<template>
    <main id="saaad-laboratory">
  
          <!--<projects-cover class=""/>-->
          <iframe src="https://labs.piks-l.fr/anciens-travaux/saaaad-deepfloat/" style="border:none; width:calc(100vw - 200px); height:calc(100vh)" title="Iframe Example"></iframe> 
        
          
          <Ui-footer />
  
    </main>
  </template>
  
  <script>
    import {mapActions} from 'vuex'
    export default {
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
      }
    }
  </script>
  