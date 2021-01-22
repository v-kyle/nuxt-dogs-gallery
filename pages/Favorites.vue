<template>
  <ImagesGrid :items="dogs" :general-alt="'dog'" />
</template>

<script lang="ts">
import Vue from 'vue';
import { useStore } from 'vuex-simple';
import ImagesGrid from '~/components/ImagesGrid.vue';
import RootStore from '~/store/modules';

export default Vue.extend({
  name: 'Favorites',

  components: { ImagesGrid },

  computed: {
    dogs(): Array<string> {
      const store: RootStore = useStore(this.$store);
      return store.favorites.favorites;
    },
  },
});
</script>
