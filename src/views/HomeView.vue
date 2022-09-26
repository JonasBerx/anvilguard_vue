<template>
  <transition name="fade" appear>
    <v-container class="d-flex fill-height justify-xl-space-around flex-xl-row">
      <v-row align="center"
        ><v-col>
          <img src="../assets/anvilguard.png" />
          <h1 class="display-2 font-weight-bold mb-6">
            The Anvilguard greets you!
          </h1>
          <p class="body-1">Grab an <b>ale</b> and stay a while</p>
        </v-col>
        <v-col><image-slider /></v-col
      ></v-row>
    </v-container>
  </transition>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
export default {
  name: "HomeView",
  components: { ImageSlider },
};
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 2000ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
