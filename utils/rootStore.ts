import { useModule } from 'vuex-simple';
import { Store } from 'vuex';
import RootStore from '~/store/modules';

export function useRootStore(store: Store<unknown>): RootStore {
  const instance = useModule<RootStore>(store, ['root']);
  if (!instance) {
    throw new Error(
      'Could not get RootStore module from Vuex store. Please check if the module has been registered correctly.'
    );
  }
  return instance;
}
