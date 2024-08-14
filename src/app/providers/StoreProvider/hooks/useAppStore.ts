import { useStore } from 'react-redux';

import { AppStore } from '../config/store';

const useAppStore = useStore.withTypes<AppStore>();

export default useAppStore;
