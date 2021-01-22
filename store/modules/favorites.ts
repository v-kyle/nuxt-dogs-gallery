import { State, Mutation } from 'vuex-simple';
import { getFavorites, saveFavorites } from '~/services/storage';

export default class Favorites {
  @State()
  public favorites: Array<string> = [];

  @Mutation()
  public setFavorites(favorites: Array<string>): void {
    this.favorites = favorites;
  }

  @Mutation()
  addToFavorite(src: string): void {
    this.favorites.push(src);
    saveFavorites(this.favorites);
  }

  @Mutation()
  public removeFromFavorites(src: string): void {
    const index = this.favorites.indexOf(src);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    saveFavorites(this.favorites);
  }

  public loadSavedFavorites(): void {
    const favorites = getFavorites();
    this.setFavorites(favorites);
  }
}
