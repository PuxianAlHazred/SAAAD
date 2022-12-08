<template>
    <main id="saaad-laboratory" >
      <div class="flex justify-center items-center flex-col h-screen">
        <svg version="1.1" viewBox="0 0 1129.5 112.51" class="my-20">
          <g>
            <path class="text-white fill-current" d="M311.14,0c-26.83,0-48.59,21.75-48.59,48.59s21.75,48.59,48.59,48.59c26.84,0,48.59-21.75,48.59-48.59
              S337.97,0,311.14,0z M311.14,82.65c-18.81,0-34.06-15.25-34.06-34.06s15.25-34.06,34.06-34.06c18.81,0,34.06,15.25,34.06,34.06
              S329.95,82.65,311.14,82.65z"/>
            <path class="text-white fill-current" d="M821.91,7.26c-26.84,0-48.59,21.75-48.59,48.59s21.75,48.59,48.59,48.59c26.83,0,48.59-21.75,48.59-48.59
              S848.75,7.26,821.91,7.26z M821.91,89.91c-18.81,0-34.06-15.25-34.06-34.06s15.25-34.06,34.06-34.06
              c18.81,0,34.06,15.25,34.06,34.06S840.72,89.91,821.91,89.91z"/>
            <g>
              <rect x="48.49" y="8.4" class="text-white fill-current" width="14.53" height="94.91"/>
              <rect x="48.49" y="15.46" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 111.6021 0.104)" class="text-white fill-current" width="14.53" height="80.79"/>
            </g>
            <path class="text-white fill-current" d="M566.52,55.73L566.52,55.73c-23.16,3.47-40.92,23.45-40.92,47.57h14.38c0-16.16,11.36-29.65,26.53-32.95v0
              c23.16-3.47,40.92-23.45,40.92-47.57V8.4h-40.92v14.38h26.53C593.06,38.94,581.69,52.44,566.52,55.73z"/>
            <path class="text-white fill-current" d="M1077.3,55.73L1077.3,55.73c23.16,3.47,40.92,23.45,40.92,47.57h-14.38c0-16.16-11.36-29.65-26.53-32.95v0
              c-23.16-3.47-40.92-23.45-40.92-47.57V8.4h40.92v14.38h-26.53C1050.77,38.94,1062.13,52.44,1077.3,55.73z"/>
          </g>
        </svg>  
        <h2 class=" text-white font-light font-mono">A film by Max Bodendorf / original soundtrack by Saåad</h2>
      </div>
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
  