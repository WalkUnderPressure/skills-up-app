import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  createSlice,
  bindActionCreators,
  SliceSelectors,
  SliceCaseReducers,
  CreateSliceOptions,
} from '@reduxjs/toolkit';

const buildAppSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string,
  Selectors extends SliceSelectors<State>,
  ReducerPath extends string = Name,
>(
  options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>,
) => {
  const slice = createSlice(options);

  const useActions = () => {
    // Use useDispatch instead useAppDispatch to prevent circular-dependency
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
  };

  return {
    ...slice,
    useActions,
  } as const;
};

export default buildAppSlice;
