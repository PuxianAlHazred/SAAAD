<template>
  <section id="works" >
    <div class="disco-works">
      <header class="works-head sticky top-0">
        <h2>Discography</h2>
        <div class="disco-nav">
          <span class="grid ml-2 items-center" v-on:click="layoutDisco = 'grid'">
            <svg class="h-6 w-6" x="0px" y="0px" viewBox="0 0 209 209" style="enable-background:new 0 0 209 209;">
              <path fill="white" d="M201.5,112c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H184V43.333h17.5c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5  H184V7.5c0-4.143-3.357-7.5-7.5-7.5S169,3.357,169,7.5v20.833h-53.666V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v20.833  H46.667V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v20.833H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h24.167V97H7.5  c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h24.167v53.666H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h24.167V201.5  c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-20.834h53.667V201.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-20.834H169V201.5  c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-20.834h17.5c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H184V112H201.5z   M169,43.333V97h-53.666V43.333H169z M46.667,43.333h53.667V97H46.667V43.333z M46.667,165.666V112h53.667v53.666H46.667z   M169,165.666h-53.666V112H169V165.666z"/>
            </svg>
          </span> 
          <span class="list items-center" v-on:click="layoutDisco = 'list'">
            <svg class="h-8 w-8" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;">
              <path fill="white" d="M6 26h4v-4h-4v4zm0 8h4v-4h-4v4zm0-16h4v-4h-4v4zm8 8h28v-4h-28v4zm0 8h28v-4h-28v4zm0-20v4h28v-4h-28z"/>
              <path  fill="none" d="M0 0h48v48h-48z" />
            </svg>
          </span> 
        </div>
      </header>
      <div :class="['full-disco', { 'layoutList' : layoutDisco === 'list', 'layoutGrid' : layoutDisco === 'grid' }]">
        <!--2021-->
        <article data-year="2021">
          <div class="curtain"></div>
          <img src="/img/мреть(наутро ночь).jpg"/>
          <div class="year">2021</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">мреть (наутро ночь)<em> <small>as</small> Saáadon</em></div>
          <div class="info">[album]</div>
          <div class="label">Cyclic Law</div>
          <div class="format">vinyl / CD / digital</div>
          <svg height="50" width="100vw" class="">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2021">
          <div class="curtain"></div>
          <img src="/img/Secret-Hell.jpg"/>
          <div class="year">2021</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer opacity-0"  @click="playSoundIntro">►</p>
          <div class="title">Secret Hell</div>
          <div class="info">[v/a "L'Homme Gris"]</div>
          <div class="label">Casino Luxembourg</div>
          <div class="format">compilation / cassette</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <!--2020-->
        <article data-year="2020">
          <div class="curtain"></div>
          <img src="/img/Prepared-Oasis.jpg"/>
          <div class="year">2020</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer" @click="playSoundIntro">►</p>

          <div class="title">Prepared Oasis</div>
          <div class="info">[single]</div>
          <div class="label">/</div>
          <div class="format">digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2020">
          <div class="curtain"></div>
          <img src="/img/Elijah.jpg"/>
          <div class="year">2020</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Elijah O.S.T</div>
          <div class="info">[album / ost]</div>
          <div class="label">/ – Choléra Cosmique</div>
          <div class="format">digital / CD</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2020">
          <div class="curtain"></div>
          <img src="/img/All-Lanes-Of-Lilac-Evening.jpg"/>
          <div class="year">2020</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">All Lanes Of Lilac Evening<em> <small>/w</small> Siavash Amini</em></div>
          <div class="info">[album]</div>
          <div class="label">Opal Tapes</div>
          <div class="format">cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <!--2019-->
        <article data-year="2019">
          <div class="curtain"></div>
          <img src="/img/мреть.jpg"/>
          <div class="year">2019</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">мреть<em> <small>as</small> Saáadon</em></div>
          <div class="info">[EP]</div>
          <div class="label">Grains Of Sand</div>
          <div class="format">cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <!--2018-->
        <article data-year="2018">
          <div class="curtain"></div>
          <img src="/img/Orbs-And-Channels-RE.jpg"/>
          <div class="year">2018</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Orbs & Channels</div>
          <div class="info">[remastered album]</div>
          <div class="label">Nahal Recordings</div>
          <div class="format">vinyl / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2018">
          <div class="curtain"></div>
          <img src="/img/Presence-Absente.jpg"/>
          <div class="year">2018</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Présence Absente</div>
          <div class="info">[album]</div>
          <div class="label">Hands In The Dark</div>
          <div class="format">vinyl / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <!--2016-->
        <article data-year="2016">
          <div class="curtain"></div>
          <img src="/img/Verdaillon.jpg"/>
          <div class="year">2016</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Verdaillon</div>
          <div class="info">[album]</div>
          <div class="label">In Paradisum</div>
          <div class="format">vinyl / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <!--2015-->
        <article data-year="2015">
          <div class="curtain"></div>
          <img src="/img/Delayed-Summer.jpg"/>
          <div class="year">2015</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Delayed Summer</div>
          <div class="info">[remastered album]</div>
          <div class="label">Grains Of Sand / BLWBCK</div>
          <div class="format">vinyl</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2015">
          <div class="curtain"></div>
          <img src="/img/Different-Streams.jpg"/>
          <div class="year">2015</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Different Streams <em><small>w/</small> EUS & Postdrome</em></div>
          <div class="info">[album]</div>
          <div class="label">Soft Rec. / Grains Of Sand</div>
          <div class="format">CD / cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <!--2014-->
        <article data-year="2014">
          <div class="curtain"></div>
          <img src="/img/Deep-Float.jpg"/>
          <div class="year">2015</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Deep / Float</div>
          <div class="info">[album]</div>
          <div class="label">Hands In The Dark</div>
          <div class="format">vinyl / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>        
        <!--2013-->
        <article data-year="2013">
          <div class="curtain"></div>
          <img src="/img/The-Charnel-Ground.jpg"/>
          <div class="year">2013</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">The Charnel Ground</div>
          <div class="info">[split album w/ Insiden]</div>
          <div class="label">In Paradisum / BLWBCK</div>
          <div class="format">cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article> 
        <article data-year="2013">
          <div class="curtain"></div>
          <img src="/img/Solid-Clouds.jpg"/>
          <div class="year">2013</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Στερεά Σύννεφα</div>
          <div class="info">[album / remixes]</div>
          <div class="label">BLWBCK</div>
          <div class="format">cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article> 
         <article data-year="2013">
          <div class="curtain"></div>
          <img src="/img/Orbs-Channels.jpg"/>
          <div class="year">2013</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Orbs & Channels</div>
          <div class="info">[album]</div>
          <div class="label">Hands In The Dark</div>
          <div class="format">cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>  
        <!--2012-->
         
        <article data-year="2012">
          <div class="curtain"></div>
          <img src="/img/Confluences.jpg"/>
          <div class="year">2012</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Confluences</div>
          <div class="info">[album]</div>
          <div class="label">BLWBCK</div>
          <div class="format">cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2012">
          <div class="curtain"></div>
          <img src="/img/Sustained-Layers.jpg"/>
          <div class="year">2012</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Sustained Layers <em><small>w/</small> EUS & Postdrome</em></div>
          <div class="info">[album]</div>
          <div class="label">BLWBCK</div>
          <div class="format">cassette / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2012">
          <div class="curtain"></div>
          <img src="/img/Heat-Death.jpg"/>
          <div class="year">2012</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">For Small Creatures Such As We...</div>
          <div class="info">[5-ways split]</div>
          <div class="label">Heat Death</div>
          <div class="format">miniCD boxset</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article> 
        <!--2011-->
        <article data-year="2011">
          <div class="curtain"></div>
          <img src="/img/Delayed-Summer.jpg"/>
          <div class="year">2011</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Delayed Summer</div>
          <div class="info">[album]</div>
          <div class="label">BLWBCK</div>
          <div class="format">cassette digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2011">
          <div class="curtain"></div>
          <img src="/img/Forget-Our-Debts.jpg"/>
          <div class="year">2011</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Forget Our Debts</div>
          <div class="info">[v/a Sequence 2]</div>
          <div class="label">Future Sequence</div>
          <div class="format">compilation / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2011">
          <div class="curtain"></div>
          <img src="/img/Arty-Empty.jpg"/>
          <div class="year">2011</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Pink Sabbath / Raincoats</div>
          <div class="info">[EP x 2]</div>
          <div class="label">Arty Empty</div>
          <div class="format">cassette</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article> 
        <article data-year="2011">
          <div class="curtain"></div>
          <img src="/img/Snowbound.jpg"/>
          <div class="year">2011</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Snowbound / I Miss You</div>
          <div class="info">[single x 2]</div>
          <div class="label">BLWBCK / La Moustacherie</div>
          <div class="format">street USB / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article> 
        <article data-year="2011">
          <div class="curtain"></div>
          <img src="/img/Recovery-Wish.jpg"/>
          <div class="year">2011</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">A Recovery Wish</div>
          <div class="info">[single]</div>
          <div class="label">Feedbackloop</div>
          <div class="format">digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article> 
        <article data-year="2011">
          <div class="curtain"></div>
          <img src="/img/Raincoats.jpg"/>
          <div class="year">2011</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Raincoats</div>
          <div class="info">[EP]</div>
          <div class="label">BLWBCK</div>
          <div class="format">digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
        <article data-year="2011">
          <div class="curtain"></div>
          <img src="/img/Pink-Sabbath.jpg"/>
          <div class="year">2011</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">Pink Sabbath</div>
          <div class="info">[EP]</div>
          <div class="label">BLWBCK</div>
          <div class="format">digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>      
        <!--2010-->
        <article data-year="2010">
          <div class="curtain"></div>
          <img src="/img/it-was.jpg"/>
          <div class="year">2010</div>
          <p class="bg-black p-4 text-lg z-[1] font-mono cursor-pointer"  @click="playSoundIntro">►</p>
          <div class="title">It Was</div>
          <div class="info">[album]</div>
          <div class="label">Lacrymal Rec. / BLWBCK</div>
          <div class="format">CD / digital</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
      </div>
    </div>

    <div class="ost-works">
      <header class="works-head">
        <h2>Original Soundtracks</h2>
      </header>
      <div class="full-ost">
        <article data-year="2022">
          <div class="curtain"></div>
          <div class="year">2022</div>
          <div class="title">Topos<em> <small>by</small> Max Bondendorf</em></div>
          <div class="label">/</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
        <article data-year="2021">
          <div class="curtain"></div>
          <div class="year">2021</div>
          <div class="title">A-HORA<em> <small>by</small> Klara Ravat</em></div>
          <div class="label">Klankvorm</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
        <article data-year="2019">
          <div class="curtain"></div>
          <div class="year">2019</div>
          <div class="title">Sphinx<em> <small>by</small> Tito Gonzalez Garcia</em></div>
          <div class="label">Tamara Films</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
        <article data-year="2019">
          <div class="curtain"></div>
          <div class="year">2019</div>
          <div class="title">Les Oracles<em> <small>by</small> Tito Gonzalez Garcia</em></div>
          <div class="label">Tamara Films</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
        <article data-year="2016">
          <div class="curtain"></div>
          <div class="year">2016</div>
          <div class="title">Elijah<em> <small>by</small> Fanny Béguély</em></div>
          <div class="label">ESAV</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
        <article data-year="2015">
          <div class="curtain"></div>
          <div class="year">2015</div>
          <div class="title">Tattoo<em> <small>by</small> Frédéric Jolivet</em></div>
          <div class="label">Monsieur Linéa</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
      </div>
    </div>
    <div class="st-works">
      <header class="works-head">
        <h2>Soundtracks</h2>
      </header>
      <div class="full-ost">
        <article data-year="2021">
          <div class="curtain"></div>
          <div class="year">2021</div>
          <div class="title">Brigidy Bram: The Kendal Hanna Story<em> <small>by</small> Laura Gamse & Toby Lunn</em></div>
          <div class="label">Daydream Reels</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
        <article data-year="2014">
          <div class="curtain"></div>
          <div class="year">2014</div>
          <div class="title">We Must Remain The Wildhearted Outsiders<em> <small>by</small> Chase Lisbon</em></div>
          <div class="label">Monolake Media</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
        <article data-year="2011">
          <div class="curtain"></div>
          <div class="year">2011</div>
          <div class="title">L'Ambianceur<em> <small>by</small> As Human Pattern</em></div>
          <div class="label">/</div>
          <svg height="50" width="100vw">
            <line x1="0" y1="24" x2="100%" y2="26" style="stroke:rgb(255,255,255)!important;" />
          </svg>
        </article>
      </div>
    </div>
    <div class="appear-works">
      <header class="works-head sticky top-0">
        <h2>Appearances & Remixes</h2>
      </header>
      <div class="full-disco">
        <article data-year="2020">
          <div class="curtain"></div>
          <div class="year">2020</div>
          <div class="title">Dome feat. Saåad<em> <small>as</small> Sádon</em></div>
          <div class="info">[v/a "Memories of a Lost City"]</div>
          <div class="label">Tokyo Jupiter</div>
          <div class="format">compilation / digital</div>
          <svg height="50" width="100vw" class="pixelateMin">
            <line x1="0" y1="24" x2="100%" y2="26"/>
          </svg>
        </article>
      </div>
    </div>

  </section>
</template>
<style lang="postcss">

  #works { @apply text-xs relative text-white; }

  .works-head { @apply h-[100px] bg-black flex items-center justify-between z-10;}
  .works-head h2 { @apply italic text-6xl font-meno font-light mr-8 inline z-10; }
   #works small { @apply text-sm ml-2 text-gray-600 italic; }

  .disco-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
  .disco-nav span { @apply opacity-30 duration-1000 ;}
  .disco-nav span:hover { @apply opacity-100 duration-1000 cursor-pointer;}
  .ost-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
  .ost-nav span { @apply opacity-30 duration-1000 ;}
  .ost-nav span:hover { @apply opacity-100 duration-1000 cursor-pointer;}
  .st-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
  .st-nav span { @apply opacity-30 duration-1000 ;}
  .st-nav span:hover { @apply opacity-100 duration-1000 cursor-pointer;}
  .appear-nav { @apply flex w-2/4 float-right text-right flex-row-reverse text-white font-meno text-xl; }
  .appear-nav span { @apply opacity-30 duration-1000 ;}
  .appear-nav span:hover { @apply opacity-100 duration-1000 cursor-pointer;}

  .full-disco{ @apply mb-20; }

  .full-disco.layoutGrid{ @apply grid grid-cols-3 gap-10 h-1/3;}
  .full-disco.layoutGrid article {@apply flex-col duration-500 transition-all justify-end;}
  .full-disco.layoutGrid:hover article:not(:hover) {opacity:0.5!important;}

  .full-disco.layoutGrid article .year{@apply mt-4;}
  .full-disco.layoutGrid article .format{@apply mb-4;}
  .full-disco.layoutGrid article img {@apply relative; height:calc(33.33vw - 100px)!important;}
  .full-disco.layoutGrid article svg { top: 29vw; }
  .full-disco.layoutList{ @apply flex flex-col; }
  .full-disco.layoutList article {@apply h-[50px];}
  .full-disco.layoutList article img { @apply hidden invisible}

  .full-disco .curtain { @apply w-full h-full absolute z-40 bg-black;}
  .full-disco article { @apply flex  overflow-hidden justify-between items-center duration-500 transition-all}
  .full-disco article:hover { @apply border-white duration-1000  transition-all; }
  .full-disco article svg { @apply absolute w-full h-[50px] duration-500 transition-all z-0; }
  .full-disco article svg line{ @apply stroke-1 stroke-current text-white duration-500 transition-all; }
  .full-disco article:hover svg line{ filter:url(#pixelateMax);}

  .full-disco article:hover svg line{ @apply text-gray-700; }
  .full-disco article .year, .full-disco article .title, .full-disco article .info, .full-disco article .label, .full-disco article .format{ @apply z-[1] bg-black duration-500 transition-all text-gray-600 font-work cursor-crosshair; } 
  .full-disco article:hover .year, .full-disco article:hover .info, .full-disco article:hover .format { @apply text-white; } 
  .full-disco article .year{ @apply pr-2; } 
  .full-disco article .title{ @apply text-xl text-white p-4; } 
  .full-disco article .info{ @apply p-2; } 
  .full-disco article .label{ @apply text-sm italic text-white p-2; }
  .full-disco article .format{ @apply pl-2; }
  .full-disco article:hover .title {@apply px-8;} 
  .full-disco article:hover .label {@apply px-4;} 

  .full-ost { @apply flex flex-col mb-20; }
  .full-ost .curtain { @apply w-full h-full absolute z-40 bg-black;}
  .full-ost article { @apply flex h-[50px] overflow-hidden justify-between items-center duration-500 transition-all}
  .full-ost article:hover { @apply border-white duration-1000  transition-all; }
  .full-ost article svg { @apply absolute w-full h-[50px] duration-500 transition-all z-0; }
  .full-ost article svg line{ @apply stroke-1 stroke-current text-white duration-500 transition-all; }
  .full-ost article:hover svg line{ @apply text-gray-400;}
  .full-ost article .year, .full-ost article .title, .full-ost article .label { @apply z-[1] bg-black duration-500 transition-all text-gray-600 font-work cursor-crosshair; } 
  .full-ost article:hover .year{ @apply text-white; } 
  .full-ost article .year{ @apply pr-2; } 
  .full-ost article .title{ @apply text-xl text-white p-4; } 
  .full-ost article .label{ @apply text-sm italic text-white pl-2; }
  .full-ost article:hover .title {@apply px-8;} 

  .full-st { @apply flex flex-col mb-20; }
  .full-st .curtain { @apply w-full h-full absolute z-40 bg-black;}
  .full-st article { @apply flex h-[50px] overflow-hidden justify-between items-center duration-500 transition-all}
  .full-st article:hover { @apply border-white duration-1000  transition-all; }
  .full-st article svg { @apply absolute w-full h-[50px] duration-500 transition-all z-0; }
  .full-st article svg line{ @apply stroke-1 stroke-current text-white duration-500 transition-all; }
  .full-st article:hover svg line{ @apply text-gray-700; }
  .full-st article .year, .full-ost article .title, .full-ost article .label { @apply z-[1] bg-black duration-500 transition-all text-gray-600 font-work cursor-crosshair; } 
  .full-st article:hover .year{ @apply text-white; } 
  .full-st article .year{ @apply pr-2; } 
  .full-st article .title{ @apply text-xl text-white p-4; } 
  .full-st article .label{ @apply text-sm italic text-white pl-2; }
  .full-st article:hover .title {@apply px-8;} 

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
  export default {
    data() {
      return {
        content: false,
        layoutDisco: 'list',
        audioACrimsonShore: null
      }
    },
    methods: {
      afterEnter(el) {
        this.content = true
      },
      beforeLeave(el) {
        this.content = false
      },
      scrollAnimation() {

        this.$gsap.utils.toArray("article").forEach((e,i) => {
          var curtain = e.getElementsByClassName('curtain');
          this.$gsap.to(curtain, {width: '0%' , height: '100%' , opacity: 0,duration: 0.2, ease:"power2.inOut", delay: '0.'+i});  

          var curtainEvent = this.$gsap.to(curtain, {width: '0%' , height: '100%' , duration: 0.5, ease:"power2.inOut", delay: '0.'+i});   
          this.$gsap.timeline({
            scrollTrigger: {
                trigger: e,
                start: "center bottom",
                end: "center top",
                invalidateOnRefresh: true,
                anticipatePin: 1,
                scrub: true,
                toggleActions: "play reverse play reverse",
                onEnterBack: e => {
                  curtainEvent.play();
                },
                onLeaveBack: e => {
                  curtainEvent.reverse();
                },
                onEnter: e => {
                  curtainEvent.play();
                },
                onLeave: e => {
                  curtainEvent.reverse();
                },
            }
          }).fromTo(e, {  y: 0, opacity: 1, ease: "power2.inOut"}, {  y: 0, opacity: 1, ease: "power2.inOut"});
        });
      },
      playSoundIntro() { this.audio = new Audio(require('@/assets/sounds/intro.ogg').default); this.audio.play(); },

    },
    mounted() {
      this.scrollAnimation();
    },
    computed: {
      isSoundEnabled() {
        return this.$store.state.muted;
      }
    }
  }
</script>
  
