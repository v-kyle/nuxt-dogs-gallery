<template>
  <select v-model="selectedBreed" class="dogs-picker" @change="updateBreed">
    <option>random</option>
    <option v-for="(breed, i) in breeds" :key="i">{{ breed }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue';
import { useStore } from 'vuex-simple';
import RootStore from '~/store/modules';

export default Vue.extend({
  name: 'DogsPicker',

  data() {
    return {
      selectedBreed: 'random',
    };
  },

  computed: {
    breeds(): Array<string> {
      const store: RootStore = useStore(this.$store);
      return store.breeds.breeds;
    },
  },

  methods: {
    updateBreed() {
      const store: RootStore = useStore(this.$store);
      store.breeds.setBreed(this.selectedBreed);
    },
  },
});
</script>

<style lang="css">
/*@import './assets/vars';

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
}*/
</style>
