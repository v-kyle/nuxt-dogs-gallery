import { State, Mutation } from 'vuex-simple';
import { getBreeds } from '~/api/dogs';

export default class Breeds {
  @State()
  public breeds: Array<string> = [];
  @State()
  public selectedBreed = 'random';

  @Mutation()
  public setBreeds(breeds: Array<string>): void {
    this.breeds = [...breeds];
  }

  @Mutation()
  setBreed(breed: string): void {
    this.selectedBreed = breed;
  }

  public async loadAllBreeds(): Promise<void> {
    const data = await getBreeds();
    this.setBreeds(data && data.length ? data : []);
  }
}
