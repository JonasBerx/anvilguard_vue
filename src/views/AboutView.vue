<template>
  <transition name="fade" appear>
    <v-container class="fill-height justify-center flex-column">
      <h1 class="display-2 font-weight-bold mb-6">Who are the Anvilguard?</h1>
      <p class="body-1" style="max-width: 60%; text-align: center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque
        habitant morbi tristique. Odio morbi quis commodo odio. Morbi non arcu
        risus quis varius. Vulputate dignissim suspendisse in est ante in nibh
        mauris. Enim ut tellus elementum sagittis. Felis donec et odio
        pellentesque diam volutpat commodo sed egestas. Euismod lacinia at quis
        risus sed vulputate odio ut. Egestas pretium aenean pharetra magna ac.
        Ut sem viverra aliquet eget sit amet tellus cras. Convallis posuere
        morbi leo urna molestie at elementum eu. Velit sed ullamcorper morbi
        tincidunt ornare massa eget egestas purus. In tellus integer feugiat
        scelerisque varius morbi. Accumsan lacus vel facilisis volutpat. Nulla
        facilisi etiam dignissim diam quis. Turpis egestas pretium aenean
        pharetra magna ac placerat. Vitae ultricies leo integer malesuada nunc.
      </p>
      <br />
      <div>
        <img src="../assets/anvilguard.png" />
        <img src="../assets/dwarf-crest.png" />
      </div>
      <br />
      <p class="body-1" style="max-width: 60%; text-align: center">
        Lacus sed viverra tellus in hac habitasse. Vitae et leo duis ut diam
        quam nulla porttitor massa. Dignissim suspendisse in est ante. Fermentum
        dui faucibus in ornare quam. Est velit egestas dui id. Sagittis purus
        sit amet volutpat consequat. Sagittis id consectetur purus ut faucibus.
        Vitae turpis massa sed elementum tempus egestas sed. Magna etiam tempor
        orci eu lobortis elementum nibh tellus. Erat velit scelerisque in
        dictum. Feugiat scelerisque varius morbi enim. Volutpat blandit aliquam
        etiam erat velit scelerisque in. Tortor pretium viverra suspendisse
        potenti nullam ac tortor vitae.
      </p>
      <br />
      <br />
      <p class="body-1" style="max-width: 60%; text-align: center">
        Eu consequat ac felis donec et. Lacinia at quis risus sed vulputate odio
        ut enim. Amet nisl purus in mollis nunc sed. Nunc aliquet bibendum enim
        facilisis gravida. Risus ultricies tristique nulla aliquet enim tortor.
        Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum
        odio. Semper risus in hendrerit gravida rutrum quisque non tellus orci.
        Habitant morbi tristique senectus et. Euismod nisi porta lorem mollis
        aliquam. Arcu ac tortor dignissim convallis aenean et tortor at risus.
        Vitae turpis massa sed elementum tempus egestas sed sed. Est ultricies
        integer quis auctor elit sed vulputate mi. Quis hendrerit dolor magna
        eget est lorem. Tincidunt nunc pulvinar sapien et ligula.
      </p>
    </v-container>
  </transition>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
};
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 500ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
