<template>
  <div id="app">
    <Header />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useStore } from 'vuex-simple';
import Header from '~/components/Header.vue';
import RootStore from '~/store/modules';

export default Vue.extend({
  components: { Header },

  async mounted(): Promise<void> {
    const store: RootStore = useStore(this.$store);
    await store.breeds.loadAllBreeds();
    store.favorites.loadSavedFavorites();
  },
});
</script>

<style lang="scss">
@import './assets/vars';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  background: $base-color;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
