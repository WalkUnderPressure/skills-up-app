import LocalStorageMock from 'shared/config/tests/LocalStorageMock';
import { LS_AUTH_USER } from 'shared/constants/localStorage';
import { User, UserStateSchema } from '../types/UserStateSchema';
import { userActions, userReducer } from './userSlice';

describe('userSlice', () => {
  test('check setAuthData', () => {
    const userData: User = { id: '1', username: 'admin' };

    const expectedResult: UserStateSchema = { authData: userData };

    const initState: DeepPartial<UserStateSchema> = {
      authData: null,
    };

    const actualResult = userReducer(
      initState as UserStateSchema,
      userActions.setAuthData({ ...userData }),
    );

    expect(actualResult).toEqual(expectedResult);
  });

  test('check signOut', () => {
    const userData: User = { id: '1', username: 'admin' };

    const expectedResult: UserStateSchema = { authData: null };

    const initState: DeepPartial<UserStateSchema> = {
      authData: userData,
    };

    const actualResult = userReducer(initState as UserStateSchema, userActions.signOut());

    expect(actualResult).toEqual(expectedResult);
  });
});

const localStorageMock = LocalStorageMock.addToWindow();

describe('userSlice with LocalStorage', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test('check initAuthData when LS empty', () => {
    const userData: User = { id: '1', username: 'admin' };

    const expectedResult: UserStateSchema = { authData: userData };
    const initState: DeepPartial<UserStateSchema> = { authData: userData };

    const actualResult = userReducer(initState as UserStateSchema, userActions.initAuthData());

    expect({ authData: actualResult.authData }).toEqual(expectedResult);
  });

  test('check initAuthData when LS full', () => {
    const userData: User = { id: '1', username: 'admin' };

    localStorageMock.add({
      [LS_AUTH_USER]: JSON.stringify(userData),
    });

    const expectedResult: UserStateSchema = { authData: userData };
    const initState: DeepPartial<UserStateSchema> = { authData: null };

    const actualResult = userReducer(initState as UserStateSchema, userActions.initAuthData());

    expect({ authData: actualResult.authData }).toEqual(expectedResult);
  });
});
