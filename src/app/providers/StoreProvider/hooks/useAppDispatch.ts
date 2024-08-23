import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../config/store';

const useAppDispatch = () => {
  if (__PROJECT__ !== 'storybook') {
    return useDispatch.withTypes<AppDispatch>()();
  } else {
    return (() => {}) as ReturnType<typeof useDispatch<AppDispatch>>;
  }
};

export default useAppDispatch;
