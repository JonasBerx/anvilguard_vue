<template>
  <v-snackbar :color="color" :timeout="timeout" v-model="showSnackbar" top>
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        icon
        color="inherit"
        text
        v-bind="attrs"
        @click="showSnackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      showSnackbar: false,
      timeout: 2000,
      color: null,
    };
  },
  methods: {
    show(message, severity) {
      this.message = message;
      this.color = severity;
      this.showSnackbar = true;
    },
  },
};
</script>

<style scoped></style>
