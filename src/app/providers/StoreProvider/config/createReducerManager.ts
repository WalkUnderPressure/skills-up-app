import { combineReducers, Reducer, UnknownAction } from '@reduxjs/toolkit';

import {
  ReducerManager,
  StoreReducersMapObject,
  StoreStateSchemaKeys,
  StoreStateSchema,
  StoreStateSchemaPossibleEmpty,
} from '../schemas';

type RequiredCombineReducers = Required<StoreReducersMapObject>;

function createReducerManager(initialReducers: StoreReducersMapObject): ReducerManager {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers };

  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers as RequiredCombineReducers);

  // An array which is used to delete state keys when reducers are removed
  let keysToRemove: Array<StoreStateSchemaKeys> = [];

  return {
    getReducerMap: () => reducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state: StoreStateSchemaPossibleEmpty, action: UnknownAction): StoreStateSchema => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = { ...state } as StoreStateSchema;

        keysToRemove.forEach((key) => {
          delete state?.[key];
        });

        keysToRemove = [];
      }

      // Delegate to the combined reducer
      return combinedReducer(state, action);
    },

    // Adds a new reducer with the specified key
    add: (name: StoreStateSchemaKeys, reducer: Reducer) => {
      if (!name || reducers[name]) {
        // return true when reducer was not added
        return false;
      }

      // Add the reducer to the reducer mapping
      reducers[name] = reducer;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers as RequiredCombineReducers);

      // return true when reducer was added
      return true;
    },

    // Removes a reducer with the specified key
    remove: (name: StoreStateSchemaKeys) => {
      if (!name || !reducers[name]) {
        return;
      }

      // Remove it from the reducer mapping
      delete reducers[name];

      // Add the key to the list of keys to clean up
      keysToRemove.push(name);

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers as RequiredCombineReducers);
    },
  };
}

export default createReducerManager;
