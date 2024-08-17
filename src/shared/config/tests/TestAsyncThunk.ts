import { AsyncThunkAction, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import axios, { AxiosStatic } from 'axios';

import { StoreStateSchema } from 'app/providers/StoreProvider';
import { ThunkExtra } from 'app/providers/StoreProvider/schemas';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: ThunkDispatch<StoreStateSchema, Return, UnknownAction>;
  private getState: () => StoreStateSchema;
  private actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: NavigateFunction;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);

    const thunkExtra: ThunkExtra = {
      api: this.api,
      navigate: this.navigate,
    };

    const result = await action(this.dispatch, this.getState, thunkExtra);

    return result;
  }
}
