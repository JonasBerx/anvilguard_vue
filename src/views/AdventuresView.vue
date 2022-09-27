<template>
  <transition name="fade" appear>
    <v-container class="">
      <v-container fill-height justify-center flex-column
        ><h1 class="display-2 font-weight-bold mb-6">
          COMING SOON™
        </h1></v-container
      >
      <v-row class="mb-6">
        <template v-for="n in 4">
          <v-col :key="n">
            <blog-post />
          </v-col>
          <v-responsive
            v-if="n === 2"
            :key="`width-${n}`"
            width="100%"
          ></v-responsive>
        </template>
      </v-row>
    </v-container>
  </transition>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
export default {
  name: "AdventuresView",
  components: { BlogPost },
};
</script>
<style scoped>
</style>
