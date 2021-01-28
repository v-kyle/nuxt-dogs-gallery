import { registerModule } from 'vuex-simple';
import { Context } from '@nuxt/types';
import RootStore from '~/store/modules';

export default ({ store }: Context): void => {
  registerModule(store, ['root'], new RootStore());
};
