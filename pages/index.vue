<template>
  <ImagesGrid :items="dogs" :general-alt="'dog'" />
</template>

<script lang="ts">
import Vue from 'vue';
import { debounce } from 'lodash';
import { useStore } from 'vuex-simple';
import { getDogs } from '~/api/dogs';
import ImagesGrid from '~/components/ImagesGrid.vue';
import RootStore from '~/store/modules';

export default Vue.extend({
  name: 'Home',

  components: { ImagesGrid },

  async fetch(): Promise<void> {
    await this.loadDogs();
  },

  data() {
    return {
      dogs: [] as Array<string>,
    };
  },

  computed: {
    selectedBreed(): string {
      const store: RootStore = useStore(this.$store);
      return store.breeds.selectedBreed;
    },
  },

  watch: {
    async selectedBreed(value) {
      const data = await getDogs(value);
      if (data) {
        this.dogs = [];
        this.dogs.push(...data);
      }
    },
  },

  mounted() {
    window.addEventListener('scroll', this.debouncedScrollHandler());
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.debouncedScrollHandler());
  },

  methods: {
    async loadDogs() {
      const data = await getDogs(this.selectedBreed);
      if (data) {
        this.dogs.push(...data);
      }
    },

    async scrollHandler() {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >
        0.95 * document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        await this.loadDogs();
      }
    },

    debouncedScrollHandler() {
      return debounce(this.scrollHandler, 500);
    },
  },
});
</script>
