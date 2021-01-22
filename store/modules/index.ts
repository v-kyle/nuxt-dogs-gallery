import { Module } from 'vuex-simple';
import Breeds from '~/store/modules/breeds';
import Favorites from '~/store/modules/favorites';

export default class RootStore {
  @Module()
  public breeds = new Breeds();

  @Module()
  public favorites = new Favorites();
}
