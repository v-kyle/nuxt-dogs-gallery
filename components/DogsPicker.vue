<template>
  <select v-model="selectedBreed" class="dogs-picker" @change="updateBreed">
    <option>random</option>
    <option v-for="(breed, i) in breeds" :key="i">{{ breed }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue';
import RootStore from '~/store/modules';
import { useRootStore } from '~/utils/rootStore';

export default Vue.extend({
  name: 'DogsPicker',

  data() {
    return {
      selectedBreed: 'random',
    };
  },

  computed: {
    rootStore(): RootStore {
      return useRootStore(this.$store);
    },

    breeds(): Array<string> {
      return this.rootStore.breeds.breeds;
    },
  },

  methods: {
    updateBreed() {
      this.rootStore.breeds.setBreed(this.selectedBreed);
    },
  },
});
</script>

<style lang="scss">
@import './assets/vars';

.dogs-picker {
  border-radius: 0.25rem;
  margin: 0 2px;
  font-weight: bold;
  font-size: 1rem;
  width: 165px;
  background: $base-color;
  padding: 0.25rem 0.5rem;

  &:hover {
    box-shadow: $base-shadow;
  }
}
</style>
