<template>
  <header id="nav">
    <div class="links-container">
      <NuxtLink to="/">Home</NuxtLink>
      <DogsPicker />
      <NuxtLink to="/favorites">Favorites</NuxtLink>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import DogsPicker from '@/components/DogsPicker.vue';

export default Vue.extend({
  name: 'Header',

  components: { DogsPicker },
});
</script>

<style lang="scss">
@import './assets/vars';

#nav {
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: $base-shadow;
  width: 100%;
  padding: 0.5rem;
  z-index: 1000;
  display: flex;
  justify-content: center;

  .links-container {
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.nuxt-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
