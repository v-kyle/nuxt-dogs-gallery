import Vue from 'vue';
import Vuex from 'vuex';
import { createVuexStore } from 'vuex-simple';
import RootStore from './modules/index';

Vue.use(Vuex);
const instance = new RootStore();

const store = createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: [],
});

export default () => store;
