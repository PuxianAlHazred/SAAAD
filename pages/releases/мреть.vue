<template>
    <main id="saaad-laboratory">
      <div class="disco-default">
        <header class="works-head sticky top-0">
          <h3><NLink to="/albums">←</NLink></h3>
          <div class="disco-nav">
            <span class="grid ml-2 items-center">
              <h2>мреть (наутро ночь)</h2>
            </span> 
          </div>
        </header>     
        <article>
          <div class="flex-1 pr-5 text-white">
            <small class="text-secondary">published on December 10, 2021</small>
            <p class="text-lg text-white">In 2018, the longtime partnership between the St-Petersburg based duo Sádon (familiar to us from their collaboration with Treha Sektori) & France's Romain Barbot alias Saåad (who has curated & managed the BLWBCK label and released Sádon's early material) finally turned into a musical collaboration as Saáadon. Entitled мреть (наутро ночь) (which can be translated as « Die (in the morning night ») is centered around the melancholic and introspective poetry of Donat Mavleev, evoking a secular dream, the end of time, its horizon and beyond. The trio's music moves across drone & ambient soundscapes, giving birth to a disturbing strangeness with radiant hues, simultaneously intense and peaceful. A poignant emotional journey the likes only such a joining forces can conjure.</p>
          </div>
          <div class="w-1/3 text-white">
            <projects-cover cover="http://localhost:3000/img/cover/мреть(наутро ночь).jpg" />
            <div class="track">
              <div class="year">1.</div>
              <div class="title">Явь</div>
              <div class="label">07:06</div>
              <svg height="50" style="width:calc(33.3333% - 65px);">
                <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
              </svg>
            </div>
            <div class="track">
              <div class="year">2.</div>
              <div class="title">Край</div>
              <div class="label">06:39</div>
              <svg height="50" style="width:calc(33.3333% - 65px);">
                <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
              </svg>
            </div>
            <div class="track">
              <div class="year">3.</div>
              <div class="title">Заход</div>
              <div class="label">07:32</div>
              <svg height="50" style="width:calc(33.3333% - 65px);">
                <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
              </svg>
            </div>
            <div class="track">
              <div class="year">4.</div>
              <div class="title">Омут</div>
              <div class="label">09:54</div>
              <svg height="50" style="width:calc(33.3333% - 65px);">
                <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
              </svg>
            </div>
            <div class="track">
              <div class="year">5.</div>
              <div class="title">Взор</div>
              <div class="label">05:37</div>
              <svg height="50" style="width:calc(33.3333% - 65px);">
                <rect x="0" y="25" width="100%" height="1" fill="url(#GradientLine)" />
              </svg>
            </div>
          </div>
        </article>
      </div>
      <Ui-footer />
  
    </main>
  </template>
  <style lang="postcss">
  .disco-default .works-head h3 { @apply text-white font-work font-light; }
  .disco-default .works-head h2 { @apply mr-0 text-white; }
  .disco-default article { @apply flex; }

  .disco-default .track { @apply flex h-[40px] overflow-hidden justify-between items-center duration-500 transition-all}
  .disco-default .track svg { @apply group-hover:opacity-100 opacity-50 absolute h-[40px] duration-1000 transition-all z-0; }
  .disco-default .track svg rect{ @apply duration-1000 transition-all;}
  .disco-default .track .year, .disco-default .track .title, .disco-default .track .label { @apply z-[1] bg-black duration-500 transition-all  font-work cursor-crosshair; } 
  .disco-default .track .year{ @apply pr-2 text-[1.2em] text-secondary; } 
  .disco-default .track .title{ @apply text-[18px] text-white p-4 font-light; } 
  .disco-default .track .label{ @apply text-sm italic text-secondary pl-2; }
  
  .disco-default .track:hover { @apply border-white duration-1000  transition-all; }
  .disco-default .track:hover .year{ @apply text-white; } 
  .disco-default .track:hover .label{ @apply text-white; } 
  .disco-default .track:hover .title {@apply px-20 ;} 
  .disco-default .track:hover a.title {filter:url(#pixelateMin);
  }

  </style>
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
  