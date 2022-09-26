<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view />
      <toast-message ref="toast" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import ToastMessage from "./components/ToastMessage";

export default {
  name: "App",
  components: {
    NavBar,
    ToastMessage,
  },
  mounted() {
    this.$root.toast = this.$refs.toast;
  },
};
</script>
