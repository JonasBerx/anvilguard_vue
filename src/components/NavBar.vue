<template>
  <v-app-bar outlined elevation="0" app>
    <v-spacer />
    <v-toolbar-title>
      <router-link to="/" class="unstyled"> Home </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-capitalize font-weight-regular"
          text
          dark
          v-bind="attrs"
          v-on="on"
          to="/about"
        >
          About
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items1"
          :key="index"
          @click="handleClick1(index)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-capitalize font-weight-regular"
          text
          dark
          v-bind="attrs"
          v-on="on"
        >
          tools
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items2"
          :key="index"
          @click="handleClick2(index)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn class="text-capitalize font-weight-regular" text to="/pvp">
      PVP Highlights
    </v-btn>
    <v-spacer />
    <v-btn
      class="text-capitalize font-weight-regular"
      v-if="$route.name !== 'login' && !user"
      text
      to="/login"
    >
      Login
    </v-btn>

    <v-btn
      class="text-capitalize font-weight-regular"
      v-if="!!user"
      text
      @click="logout()"
    >
      Logout
    </v-btn>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      this.$router.push("/");
    },
    handleClick1(e) {
      const routes = {
        0: "/mission",
        1: "/organisation",
        2: "/members",
      };
      console.log(routes[e]);
    },
    handleClick2(e) {
      const routes = {
        0: "guildbank",
        1: "/discord",
      };
      if (routes[e] === "guildbank") {
        window.open(
          "https://docs.google.com/spreadsheets/d/1e4ZP62ybJmjpoWk8mVjgvxoQhOP-ldenVuRQy6-62uY/edit#gid=1895612339"
        );
      } else {
        console.log(routes[e]);
      }
    },
  },
  computed: {
    user: "",
  },
  data: () => ({
    items1: [
      { title: "Our Mission" },
      { title: "Organization" },
      { title: "Members" },
    ],
    items2: [{ title: "Guild bank" }, { title: "Discord" }],
    closeOnClick: true,
  }),
};
</script>

<style scoped>
.unstyled {
  color: inherit;
  text-decoration: none;
}
</style>
