<template>
  <v-carousel
    cycle
    height="700"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-row class="fill-height" align="center" justify="center">
        <v-img
          class="rounded-xl"
          :src="slide"
          max-width="700px"
          max-height="700px"
        />
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt39bf30d13c9b2cfd/616a002f85a779070bc78072/N398AT5GCW161603475083574.jpg",
        "https://static.icy-veins.com/images/classic/og-images/dwarf.jpg",
        "https://c4.wallpaperflare.com/wallpaper/459/19/780/warcraft-world-of-warcraft-armor-dwarf-wallpaper-preview.jpg",
        "https://i.pinimg.com/originals/ba/63/32/ba6332c1dcb7a99e90c5061f0abe3df4.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
        "https://img3.goodfon.com/wallpaper/nbig/5/9e/dwarf-shaman-wow-warcraft.jpg",
      ],
    };
  },
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
