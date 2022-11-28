<template>
  <section id="events" >
    <header class="events-head">
      <h2><NLink to="/events">Events</NLink></h2>
      <div class="events-nav">
        <span @click="filtered = 'all'" ref="all" :class="['all', { 'active' : filtered === 'all' }]">VIEW ALL<br>EVENTS</span> 
        <span @click="filtered = 'liveset'" ref="liveset" :class="['liveset', { 'active' : filtered === 'liveset' }]">LIVE<br> SET</span> 
        <span @click="filtered = 'exhibition'" ref="exhibition" :class="['exhibition', { 'active' : filtered === 'exhibition' }]">INSTALLATION<br>/ EXHIBITION  </span>
        <span @click="filtered = 'collaboration'" ref="collaboration" :class="['collaboration', { 'active' : filtered === 'collaboration' }]">COLLABORATION<br>/ OTHER</span>
        <span class="booking" @click="actBooking()">BOOKING</span>
      </div>
    </header>
    <div class="full-events" :class="{'opacity-50 mr-[255px] delay-0 duration-75': this.$store.state.booking, 'opacity-100 mr-[0px] delay-1000': !this.$store.state.booking}">
      <!--2022-->
      <article data-debut="2022-11-26" data-fin="2022-11-26" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2022 NOV. 26</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">SAINT-JULIA <div class="country"> FR </div></div>
        <div class="venue">Cyclic Law 20th Anniversary<br>@ Château H</div>
        <div class="info">+ Common Eider, King Eider + Ascending Divers + Den Sorte Død + Curse All Kings</div>
      </article>
      <article data-debut="2022-10-29" data-fin="2022-10-29" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2022 OCT. 29</span>
          <div class="assets">
            <div class="liveset hidden"></div>
            <div class="exhibition hidden"></div>
            <div class="collaboration hidden"></div>
          </div>
        </div>
        <div class="city">SARE <div class="country"> FR </div></div>
        <div class="venue">☽ MAPA GALDUAK Festival ☾<br>@ Usopop</div>
        <div class="info"></div>
      </article>
      <!--2021-->
      <article data-debut="2021-12-04" data-fin="2021-12-04" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2021 DEC. 04</span>
          <div class="assets">
            <div class="liveset hidden"></div>
            <div class="exhibition hidden"></div>
            <div class="collaboration hidden"></div>
          </div>
        </div>
        <div class="city">BESANÇON <div class="country"> FR </div></div>
        <div class="venue">Hands In The Dark Festival<br>@ Bains Douches Battant</div>
        <div class="info"></div>
      </article>
      <article data-debut="2021-10-22" data-fin="2021-10-22" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2021 OCT. 22</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">GRENOBLE <div class="country"> FR </div></div>
        <div class="venue">@ L'Ampérage</div>
        <div class="info">+ UBV76</div>
      </article>
      <article data-debut="2021-10-14" data-fin="2021-10-14" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2021 OCT. 14</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Dans le Noir<br>@ DADA</div>
        <div class="info">+ Ascending Divers</div>
      </article>
      <article data-debut="2021-08-07" data-fin="2021-08-07" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2021 AUG. 07</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">DIJON <div class="country"> FR </div></div>
        <div class="venue">Festival MV<br>@ Église Saint-Philibert</div>
        <div class="info">+ Hands In The Dark (Mix)</div>
      </article>
      <article data-debut="2021-07-09" data-fin="2021-07-09" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2021 JUL. 09</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">GIGORS & LOZERON <div class="country"> FR </div></div>
        <div class="venue">@ La Sye Electric</div>
        <div class="info">+ Hands In The Dark (Mix)</div>
      </article>
      <article data-debut="2021-04-17" data-fin="2021-04-17" data-collaboration="true" data-exhibition="true" data-liveset="false">
        <div class="curtain"></div>
        <div class="date">
          <span>2021 APR. 17</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">LUXEMBOURG <div class="country"> LU </div></div>
        <div class="venue">«L’Homme Gris» raconte<br>@ Casino Luxembourg</div>
        <div class="info">«Secret Hell» in situ listening experience, part of «L’Homme Gris» exhibition curated by Benjamin Bianciotto. Collaborative installation with Élodie Lesourd + Stephen O' Malley + Aaron Turner + Saåad + Marnie Weber + Julien Langendorff & Lori Sean Berg + Sindre Foss Skancke + NVK + Cigvë + Neuromancienne + Édouard S. Lamothe</div>
      </article>
      <article data-debut="2021-02-15" data-fin="2021-03-26" data-collaboration="true" data-exhibition="true" data-liveset="false">
        <div class="curtain"></div>
        <div class="date">
          <span>2021 FEB. 15<br> &gt; MAR. 26</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">ANTANANARIVO <div class="country"> MG </div></div>
        <div class="venue">Christian Sanna's «Chère Embona» exhibition<br>@ Fondation H</div>
        <div class="info">Notes For Embona audio & video installation in collaboration with Christian Sanna</div>
      </article>
      <!--2020-->
      <article data-debut="2020-12-15" data-fin="2020-12-15" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2020 DEC. 15</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">LA CHAISE-DIEU <div class="country"> FR </div></div>
        <div class="venue">@ Amphithéâtre Cziffra</div>
        <div class="info">Sphinx Original Soundtrack (Live) + Stéphane Fuget, Les Épopées & Tito González García</div>
     </article>
     <article data-debut="2020-12-02" data-fin="2021-01-23" data-collaboration="true" data-exhibition="true" data-liveset="false">
        <div class="curtain"></div>
        <div class="date">
          <span>2020 DEC. 02<br>&gt; 2021 JAN. 23</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">PARIS <div class="country"> FR </div></div>
        <div class="venue">Christian Sanna's «Lettres à Embona» exhibition @ Fondation H</div>
        <div class="info">Notes For Embona audio & video installation in collaboration with Christian Sanna</div>
      </article>
      <article data-debut="2020-09-11" data-fin="2020-09-12" data-collaboration="false" data-exhibition="true" data-liveset="false">
        <div class="curtain"></div>
        <div class="date">
          <span>2020 SEP. 11<br>&gt; SEP. 12</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Les Journées du Patrimoine <br>@ Le Metronum</div>
        <div class="info">«Prepared Oasis» Multi channels audio & video installation</div>
      </article>
      <!-- 2018 -->
      <article data-debut="2018-11-15" data-fin="2018-11-15" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2018 NOV. 15</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">BREST <div class="country"> FR </div></div>
        <div class="venue">Festival Invisible <br>@ Passerelle Centre d'Art Contemporain</div>
        <div class="info">+ Thomas Poli</div>
      </article>
      <article data-debut="2018-11-01" data-fin="2018-11-01" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2018 NOV. 01</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">NANTES <div class="country"> FR </div></div>
        <div class="venue">Soy Festival<br>@ Muséum d'Histoire Naturelle</div>
        <div class="info">+ Anne Müller</div>
      </article>    
      <article data-debut="2018-10-31" data-fin="2018-10-31" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2018 OCT. 31</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">RENNES <div class="country"> FR </div></div>
        <div class="venue">@ Le Terminus</div>
        <div class="info">+ Partout Partout + Descendeur</div>
      </article>  
      <article data-debut="2018-09-21" data-fin="2018-09-21" data-collaboration="true" data-exhibition="true" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2018 SEP. 21</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Le Printemps de Septembre<br>@ Le Lieu Commun</div>
        <div class="info">«Diminished Finlucier» a live performance with Élodie Lesourd, Romain Barbot & Benjamin Bianciotto</div>
      </article>  
      <article data-debut="2018-09-13" data-fin="2018-09-13" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2018 SEP. 13</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Electro Alternativ Festival<br>@ Le Rex</div>
        <div class="info">+ LAAKE</div>
      </article> 
       <article data-debut="2018-08-25" data-fin="2018-08-25" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2018 AUG. 25</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">UZÈS <div class="country"> FR </div></div>
        <div class="venue">Les Courants Alternatifs Festival<br>@ Le Grand Mas</div>
        <div class="info">+ Johan Papaconstantino + Saint DX + Miel de Montagne + René Danger + Pardonnez-Nous + Le Camion Bazar</div>
      </article> 
       <article data-debut="2018-05-23" data-fin="2018-05-23" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2018 MAY 23</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">VALLESVILLES <div class="country"> FR </div></div>
        <div class="venue">@ La Mami</div>
        <div class="info">+ Bitchin Bajas + Hinterheim</div>
      </article> 
      <!-- 2017 -->
       <article data-debut="2017-07-07" data-fin="2017-07-07" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2017 JUL. 07</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">ST-CYPRIEN <div class="country"> FR </div></div>
        <div class="venue">Festival Hydraphonies II<br/>@ Église de St-Cyprien</div>
        <div class="info"></div>
      </article> 
      <article data-debut="2017-05-19" data-fin="2017-05-19" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2017 MAY 19</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">ROTTERDAM <div class="country"> NL </div></div>
        <div class="venue">Klankvorm<br/>@ V2</div>
        <div class="info">with a visual performance by Klara Ravat<br/>
       + Joost Rekveld & Andrey Smirnov + Tijs Ham & Birk Nygaard</div>
      </article>  
      <article data-debut="2017-02-21" data-fin="2017-02-21" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2017 FEB. 21</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">PARIS <div class="country"> FR </div></div>
        <div class="venue">@ Petit Bain</div>
        <div class="info">+ Mondkopf + December</div>
      </article>  
      <!-- 2016 -->
      <article data-debut="2016-05-21" data-fin="2016-05-21" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2016 MAY. 21</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">RODEZ <div class="country"> FR </div></div>
        <div class="venue">Nuit Européenne des Musées<br>@ Musée Fenaille</div>
        <div class="info">+ Naïm Armor</div>
      </article>
      <article data-debut="2016-03-23" data-fin="2016-03-23" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2016 MAR. 23</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Festival International de la Danse Contemporaine<br>@ CDC</div>
        <div class="info">«Tattoo» (live soundtrack)</div>
      </article>   
      <article data-debut="2016-03-22" data-fin="2016-03-22" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2016 MAR. 22</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Festival International de la Danse Contemporaine<br>@ CDC</div>
        <div class="info">«Tattoo» (live soundtrack)</div>
      </article> 
      <article data-debut="2016-02-28" data-fin="2016-02-28" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2016 FEB. 28</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">ST-MALO <div class="country"> FR </div></div>
        <div class="venue">Festival La Route du Rock Hiver<br>@ Chapelle Saint-Sauveur</div>
        <div class="info">«Spero Lucem» (a collaborative live performance with Mondkopf & Somaticae)
        + Pye Corner Audio</div>
      </article> 
       <article data-debut="2016-02-12" data-fin="2016-02-12" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2016 FEB. 12</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Mix Art Myris</div>
        <div class="info">«Tattoo» (live soundtrack)</div>
      </article> 
      <article data-debut="2016-01-28" data-fin="2016-01-28" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2016 JAN. 28</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">PARIS <div class="country"> FR </div></div>
        <div class="venue">Biennale Némo<br>@ Église Saint-Merri</div>
        <div class="info">«Spero Lucem» (a collaborative live performance with Mondkopf & Somaticae)
        + thisquietarmy</div>
      </article>  
      <!-- 2015 -->  
      <article data-debut="2015-09-20" data-fin="2015-09-20" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2015 SEP. 20</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Connexion Café</div>
        <div class="info">live collaboration with Oiseaux-Tempête<br/> + Orme</div>
      </article>   
      <article data-debut="2015-09-10" data-fin="2015-09-10" data-collaboration="true" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2015 SEP. 10</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Théâtre des Mazades</div>
        <div class="info">«Tattoo» (live soundtrack)</div>
      </article>  
      <article data-debut="2015-06-29" data-fin="2015-06-29" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2015 JUN. 29</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Festival Les Siestes Électroniques <br>@ Jardin Compans-Caffarelli</div>
        <div class="info">«Verdaillon» (live)<br/>+ Tasseomancy</div>
      </article>  
      <article data-debut="2015-05-14" data-fin="2015-05-14" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2015 MAY 14</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">LYON <div class="country"> FR </div></div>
        <div class="venue">Festival Les Nuit Sonores <br>@ Le Sonic</div>
        <div class="info">+ Somaticae + Plein Soleil + Le Chasseur + Helden</div>
      </article>  
      <!-- 2014 -->  
      <article data-debut="2014-11-15" data-fin="2014-11-15" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 NOV. 15</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">MOSCOW <div class="country"> RU </div></div>
        <div class="venue">@ Dewar's Powerhouse</div>
        <div class="info">+ Creation VI + Renat Da Capo</div>
      </article> 
      <article data-debut="2014-11-14" data-fin="2014-11-14" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 NOV. 14</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">ST-PETERSBURG <div class="country"> RU </div></div>
        <div class="venue">@ Dada</div>
        <div class="info">+ ТРОПѦ</div>
      </article>  
      <article data-debut="2014-10-11" data-fin="2014-10-11" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 OCT. 11</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Festival Toulouse les Orgues<br>@ Hôtel Dieu</div>
        <div class="info">«Verdaillon» (live)</div>
      </article> 
      <article data-debut="2014-04-23" data-fin="2014-08-04" data-collaboration="true" data-exhibition="true" data-liveset="false">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 APR. 14<br> &gt; AUG. 04</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">ARLINGTON <div class="country"> US (VA) </div></div>
        <div class="venue">«Fermata» exhibition<br>@ Artisphere</div>
        <div class="info">collective sound installation + Ryuichi Sakamoto + Don Zientara & Ian MacKaye + Jarboe + Lawrence English + Forest Swords + Jez Riley French + The Books + Lucianne Walkowicz + Alvin Lucier + CFCF + Annea Lockwood + Eddie Ruscha + Toni Dimitrov + The London Sound Survey + Francisco Lopèz + Salomè Voegelin + David Mollin  + Richard Chartier + Peals + Alberto Gaitán + Brian McBride + Kate Carr + Christine Sun Kim + Specta Ciera + Beauty Pill + Scarfolk Council + Markus Guentner + John Henry Blatter + Nathan Tersteeg Wool</div>
      </article>  
      <article data-debut="2014-07-29" data-fin="2014-07-29" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 JUL. 29</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Le Metronum</div>
        <div class="info">+ Chelsea Wolfe</div>
      </article>
      <article data-debut="2014-07-12" data-fin="2014-07-12" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 JUL. 12</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">RIMONT <div class="country"> FR </div></div>
        <div class="venue">@ Tunnel de Rimont</div>
        <div class="info"></div>
      </article>
      <article data-debut="2014-06-14" data-fin="2014-06-14" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 JUN. 14</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">PARIS <div class="country"> FR </div></div>
        <div class="venue">Humanist SK Festival <br>@ Studio Campus</div>
        <div class="info">+ Hakobune + Beachers</div>
      </article> 
      <article data-debut="2014-06-04" data-fin="2014-06-04" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 JUN. 04</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">LONDON <div class="country"> UK </div></div>
        <div class="venue">@ Servant Jazz Quarters</div>
        <div class="info">+ Tomaga + Agathe Max</div>
      </article> 
      <article data-debut="2014-04-14" data-fin="2014-04-14" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 JUN. 14</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">PARIS <div class="country"> FR </div></div>
        <div class="venue">@ La Flèche d'Or</div>
        <div class="info">+ Death & Vanilla + Mayerling</div>
      </article> 
      <article data-debut="2014-02-08" data-fin="2014-02-08" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2014 FEB. 08</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">BIARRITZ <div class="country"> FR </div></div>
        <div class="venue">@ Atabal</div>
        <div class="info">+ Scott Kelly & The Road Home + Radhammers</div>
      </article>     
      <!-- 2013 -->
      <article data-debut="2013-10-23" data-fin="2013-10-23" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2013 OCT. 23</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Saint des Seins</div>
        <div class="info">+ Robedoor + Holy Strays + Cankun</div>
      </article> 
      <article data-debut="2013-08-30" data-fin="2013-08-30" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2013 AUG. 30</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">PARIS <div class="country"> FR </div></div>
        <div class="venue">@ Glazart Plage</div>
        <div class="info">+ Somatica + Fl/or</div>
      </article> 
      <article data-debut="2013-06-29" data-fin="2013-06-29" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2013 JUN. 29</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">LE SAIX <div class="country"> FR </div></div>
        <div class="venue">Echos Festival <br>@ Le Faï</div>
        <div class="info">+ Insiden + Yann Gourdon + Tamagawa + Cascade + Antez</div>
      </article> 
      <article data-debut="2013-01-27" data-fin="2013-01-27" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2013 JAN. 27</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Saint des Seins</div>
        <div class="info">+ Zombi Zombi + Etienne Jaumet</div>
      </article>   
      <!-- 2012 -->
      <article data-debut="2012-10-29" data-fin="2012-10-29" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2012 OCT. 29</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ La Dynamo</div>
        <div class="info">+ Barn Owl + Sunshine Parker</div>
      </article> 
      <article data-debut="2012-07-22" data-fin="2012-07-22" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2012 JUL. 22</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Festival Toulouse d'Été<br>@ Fontaine St-Michel</div>
        <div class="info">«Confluences» (live)</div>
      </article>  
      <article data-debut="2012-06-28" data-fin="2012-06-28" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2012 JUN. 28</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Festival Les Siestes Électroniques<br>@ Jardin Compans Caffarelli</div>
        <div class="info">+ James Blackshaw + Morphosis + Matthew Friedberger + Kassem Mosse</div>
      </article>  
      <article data-debut="2012-05-31" data-fin="2012-05-31" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2012 MAY 31</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">Les Week-Ends de l'Art Contemporain<br>@ Espace Croix-Baragnon</div>
        <div class="info"></div>
      </article>
      <article data-debut="2012-05-30" data-fin="2012-05-30" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2012 MAY 30</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Saint des Seins</div>
        <div class="info">+ Wolves In The Throne Room</div>
      </article>
      <article data-debut="2012-03-23" data-fin="2012-03-23" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2012 MAR. 23</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Mix Art Myris</div>
        <div class="info">+  Nadja + Off The Radar + Spleendrinker's Project</div>
      </article>
      <!-- 2011 -->
      <article data-debut="2011-10-05" data-fin="2011-10-05" data-collaboration="false" data-exhibition="false" data-liveset="true">
        <div class="curtain"></div>
        <div class="date">
          <span>2011 OCT. 05</span>
          <div class="assets">
            <div class="liveset  hidden"></div>
            <div class="exhibition  hidden"></div>
            <div class="collaboration  hidden"></div>
          </div>
        </div>
        <div class="city">TOULOUSE <div class="country"> FR </div></div>
        <div class="venue">@ Auditorium Bellegarde</div>
        <div class="info">+ Tim Hecker</div>
      </article>
    </div>
    <ui-booking />
  </section>
</template>
<style lang="postcss">
  .veryHidden{ display:none!important; visibility: hidden;}
  
  #events { @apply text-xs relative text-white; }

  .events-head { @apply sticky top-0 h-[100px] bg-black flex items-center justify-between z-10;}
  .events-head h2 { @apply text-7xl font-meno  italic font-light mr-8 inline; }
  .events-nav { @apply flex w-3/4 float-right justify-between  text-[10px] leading-none; }
  .events-nav .liveset, .events-nav .exhibition, .events-nav .collaboration { @apply text-secondary duration-1000;}
  .events-nav .active { @apply text-white duration-1000;}

  .events-nav .liveset:hover, .events-nav .exhibition:hover, .events-nav .collaboration:hover { @apply duration-1000 cursor-pointer text-white;}
  .events-nav .liveset:before, .events-nav .exhibition:before, .events-nav .collaboration:before { @apply text-[10px] flex font-bold p-0 float-left w-7 h-7 mr-2 justify-center items-center rounded-full z-10;}
  .events-nav .liveset:before { @apply bg-black text-secondary; content: "–";}
  .events-nav .exhibition:before {@apply bg-secondary text-black; content: "Ø";}
  .events-nav .collaboration:before {@apply bg-secondary text-black; content: "∫∫∫";}
  .events-nav .all:hover, .events-nav .booking:hover { @apply opacity-100 duration-1000 cursor-pointer;}
  .events-nav .booking { @apply p-2 border-[1px] border-white duration-1000;} 
  .events-nav .booking:hover { @apply bg-white text-black duration-1000;}

  .full-events { @apply flex flex-col mb-20 duration-1000 transition-all; }
  .full-events .past { @apply text-secondary hover:text-white}
  .full-events .curtain { @apply w-full h-full absolute z-40 bg-black;}

  .full-events .activated{@apply opacity-100 blur-0 duration-1000 transition-all;}

  .full-events .desactivated{@apply opacity-0 blur duration-1000 transition-all skew-y-0 origin-top py-0;}

  .full-events article { @apply  py-4 font-work flex overflow-hidden content-end duration-1000 border-b-[1px] border-t-[1px] border-dotted border-black transition-all}
  .full-events article:hover { @apply border-white duration-1000 py-8 transition-all; }
  
  .full-events article .date, .full-events article .country, .full-events article .city, .full-events article .venue, .full-events article .info { @apply p-1 leading-4}
  .full-events article .date{ @apply w-2/12 text-[1.5em]} 
  .full-events article .city:before{ @apply pr-2; content: " | ";}
  .full-events article .city{ @apply text-lg w-4/12 flex items-start; }
  .full-events article .country{ @apply text-[9px]; }
  .full-events article .country:before{ @apply pl-2; content: "(";}
  .full-events article .country:after{ content: ")";}
  .full-events article .venue{ @apply text-[13px] w-3/12 flex items-start uppercase; }
  .full-events article .info{ @apply text-[12px] w-3/12 flex items-start text-right flex-row-reverse; }

  .assets { @apply flex items-center }
  .assets .liveset:before { @apply text-[13px] mr-2 rounded-full; content: "–";}
  .assets .exhibition:before {@apply text-[13px] mr-2  rounded-full; content: "Ø";}
  .assets .collaboration:before {@apply text-[10px] rounded-full; content: "∫∫∫";}

</style>
<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        content: false,
        layout: 'list',
        filtered: 'all',
      }
    },
    methods: {
      ...mapActions({ 
        actBooking: 'actBooking',
      }),
      afterEnter(el) {
        this.content = true
      },
      beforeLeave(el) {
        this.content = false
      },
      scrollAnimation() {
        this.$gsap.utils.toArray("article").forEach((e,i) => {
          //Get cat
          var assets = e.querySelector('.assets')
          if(e.getAttribute('data-collaboration') === "true") { assets.querySelector('.collaboration').classList.toggle('hidden') } 
          if(e.getAttribute('data-exhibition') === "true") { assets.querySelector('.exhibition').classList.toggle('hidden') } 
          if(e.getAttribute('data-liveset') === "true") { assets.querySelector('.liveset').classList.toggle('hidden') } 
          //Get date
          var date = e.getAttribute('data-fin'), now = new Date(), month = now.getMonth(), day = now.getDate(), year = now.getFullYear(), veryNow = (year+'-'+(month+1)+'-'+day);
          if (date > veryNow) { e.classList.add('become') } else if(date < veryNow) {e.classList.add('past')} else if(date === veryNow) {e.classList.add('animate-pulse')} else {  }
          //Curtain effect
          this.$gsap.to(".curtain", {width: '0%' , height: '100%' , duration: 0.3, ease:"power2.inOut", delay: '0.'+i});   
        });
      },
      filter() {
        const highlightedItems = document.querySelector(".full-events").querySelectorAll("article");
        const GSAP = this.$gsap;

        this.$refs.all.addEventListener('click', function() {
          highlightedItems.forEach((e,i) => { 
            GSAP.to(e, {duration: 0.3, ease:"linear", delay: '0.1'+i,
            onStart:function(){e.classList.add('activated'); },
            onComplete:function(){ setTimeout(() => {e.classList.remove('veryHidden');}, '0.'+i); e.classList.remove('desactivated');}}); 
          });
        }, false);

        this.$refs.liveset.addEventListener('click', function() {
          highlightedItems.forEach((e,i) => { 
            if(e.getAttribute('data-liveset') === "true") { 
              GSAP.to(e, {duration: 0.3, ease:"linear", delay: '0.'+i,
              onStart:function(){e.classList.remove('veryHidden'); e.classList.add('activated'); },
              onComplete:function(){e.classList.remove('desactivated');}}); 
            } else { 
              GSAP.to(e, {duration: 0.3, ease:"linear", delay: '0.'+i, 
              onStart:function(){e.classList.add('desactivated'); },
              onComplete:function(){ setTimeout(() => {e.classList.add('veryHidden');}, '0.'+i); e.classList.remove('activated');}}); 
            } 
          });
        }, false);
        
        this.$refs.collaboration.addEventListener('click', function() {
          highlightedItems.forEach((e,i) => { 
            if(e.getAttribute('data-collaboration') === "true") { 
              GSAP.to(e, {duration: 0.3, ease:"linear", delay: '0.'+i, 
              onStart:function(){e.classList.remove('veryHidden'); e.classList.add('activated'); },
              onComplete:function(){e.classList.remove('desactivated');}}); 
            } else { 
              GSAP.to(e, {duration: 0.3, ease:"linear", delay: '0.'+i, 
              onStart:function(){e.classList.add('desactivated'); },
              onComplete:function(){ setTimeout(() => {e.classList.add('veryHidden');}, '0.'+i); e.classList.remove('activated');}}); 
            } 
          });
        }, false);

        this.$refs.exhibition.addEventListener('click', function() {
          highlightedItems.forEach((e,i) => { 
            if(e.getAttribute('data-exhibition') === "true") { 
              GSAP.to(e, {duration: 0.3, ease:"linear", delay: '0.'+i, 
              onStart:function(){e.classList.remove('veryHidden'); e.classList.add('activated'); },
              onComplete:function(){e.classList.remove('desactivated');}}); 
            } else { 
              GSAP.to(e, {duration: 0.3, ease:"linear", delay: '0.'+i, 
              onStart:function(){e.classList.add('desactivated'); },
              onComplete:function(){ setTimeout(() => {e.classList.add('veryHidden');}, '0.'+i); e.classList.remove('activated');}}); 
            } 
          });
        }, false);


      }
    },
    mounted() {
      this.scrollAnimation();
      this.filter();
    }
  }
</script>
  
