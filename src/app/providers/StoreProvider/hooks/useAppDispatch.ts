import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../config/store';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default useAppDispatch;
