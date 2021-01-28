<template>
  <div class="image-container" @click="clickHandler">
    <img :src="src" :alt="generalAlt" />
    <div class="image-icon" :class="{ show: isFavorite }">❤</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useModule, useStore } from 'vuex-simple';
import RootStore from '~/store/modules';
import { useRootStore } from '~/utils/rootStore';

export default Vue.extend({
  name: 'ImageContainer',

  props: {
    src: {
      type: String,
      required: true,
    },

    generalAlt: {
      type: String,
      default: 'Image',
    },
  },

  computed: {
    rootStore(): RootStore {
      return useRootStore(this.$store);
    },

    favorites(): Array<string> {
      return this.rootStore.favorites.favorites;
    },

    isFavorite(): boolean {
      return this.rootStore.favorites.favorites.includes(this.src);
    },
  },

  methods: {
    clickHandler() {
      if (this.isFavorite) {
        this.rootStore.favorites.removeFromFavorites(this.src);
      } else {
        this.rootStore.favorites.addToFavorite(this.src);
      }
    },
  },
});
</script>

<style lang="scss">
@import './assets/vars';

.image-container {
  position: relative;
  border-radius: 0.5rem;
  width: 300px;

  img {
    cursor: pointer;
    border-radius: 0.5rem;
    height: 200px;
    width: 100%;

    &:hover {
      box-shadow: $base-shadow;
    }
  }

  .image-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    z-index: 100;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid grey;
    text-align: center;
    line-height: 30px;
    display: none;
    color: red;
    font-weight: bold;
    font-size: 1rem;
  }
}

.image-container .image-icon.show,
.image-container:hover .image-icon:not(.show) {
  display: block;
}
</style>
