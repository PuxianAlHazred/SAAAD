<template>
  <footer class="main-footer">
    <span class="font-english text-xl">Social media presence will remain sporadic.</span>
    <span class="mb-10 font-english text-xl">If you want to be kept informed about Saåad's activities, please subscribe to the newsletter.</span>
    <p class="font-garamond text-lg uppercase">Plan du site : 
      <nuxt-link to="/">Home</nuxt-link> - 
      <nuxt-link to="/events">Events</nuxt-link> - 
      <nuxt-link to="/works">Works</nuxt-link>
    </p><br>
    <p>Plan secondaire :
      <nuxt-link to="/albums">Albums</nuxt-link> - 
      <nuxt-link to="/albums/deep-float">Albums > Deep Float</nuxt-link> - 
      <nuxt-link to="/appearances-&-remixes">Appearances & Remixes</nuxt-link> - 
      <nuxt-link to="/original-soundtracks">Original Soundtracks</nuxt-link>
    </p>
    <p class="mt-10 font-garamond text-lg uppercase">© 2022 - <nuxt-link to="https://saaadrone.com">Saåad</nuxt-link></p>
  </footer>
</template>
<style lang="postcss" scooped>
  .main-footer{
     @apply font-mono bg-white h-[50vh] w-full text-black flex align-middle items-center justify-center text-center flex-col relative overflow-hidden px-20;
  }
  .main-footer a{
    @apply underline text-secondary;
  }

</style>