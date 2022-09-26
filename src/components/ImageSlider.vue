<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <v-img
          :src="currentImg"
          max-height="600px"
          min-height="600px"
          max-width="600px"
          min-width="600px"
          class="rounded-xl"
          :elevation="20"
        />
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      images: [
        "https://static.icy-veins.com/images/classic/og-images/dwarf.jpg",
        "https://external-preview.redd.it/vfpHqwbL13c0ZCa8UIB3g8hGE_0xVx5kzpau1aCQmHM.jpg?auto=webp&s=08174e680c974c266b67b5ea4470ed4d708cd84e",
        "https://i.pinimg.com/originals/ba/63/32/ba6332c1dcb7a99e90c5061f0abe3df4.jpg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 8000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
