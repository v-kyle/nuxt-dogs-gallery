<template>
  <ImagesGrid :items="dogs" :general-alt="'dog'" />
</template>

<script lang="ts">
import Vue from 'vue';
import ImagesGrid from '~/components/ImagesGrid.vue';
import RootStore from '~/store/modules';
import { useRootStore } from '~/utils/rootStore';

export default Vue.extend({
  name: 'Favorites',

  components: { ImagesGrid },

  computed: {
    rootStore(): RootStore {
      return useRootStore(this.$store);
    },

    dogs(): Array<string> {
      return this.rootStore.favorites.favorites;
    },
  },
});
</script>
