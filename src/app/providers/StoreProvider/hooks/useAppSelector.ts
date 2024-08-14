import { useSelector } from 'react-redux';

import { RootState } from '../config/store';

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;
