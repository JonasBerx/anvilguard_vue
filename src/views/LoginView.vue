<template>
  <v-container class="d-flex fill-height">
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="#7B3E03">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pl-16 pr-16">
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Username"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="pb-4 justify-space-around">
            <v-btn large color="#7B3E03" to="/">Back</v-btn>
            <v-btn large color="#7B3E03" to="/">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "LoginView",
  components: {},
  props: {
    source: String,
  },
};
</script>
<style scoped>
</style>
