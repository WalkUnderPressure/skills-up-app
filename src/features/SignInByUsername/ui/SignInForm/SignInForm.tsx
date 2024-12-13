import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInByUsernameErrorCode } from '~/features/SignInByUsername';
import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { Button, ButtonTheme, ButtonRounded } from '~/shared/ui/Button';
import { Text, TextTheme } from '~/shared/ui/Text';
import classNames from '~/shared/lib/classNames';
import { Input } from '~/shared/ui/Input';
import {
  useSignInFormIsLoading,
  useSignInFormErrorCode,
  useSignInFormUsername,
  useSignInFormPassword,
  useSignInFormIsFailed,
} from '../../model/selectors';
import { signInReducer, useSignInActions } from '../../model/slices/signInSlice';
import { useSignInByUsername } from '../../model/services/signInByUsername';
import { getRouteProfile } from '~/shared/constants/appRoutes';
import { User } from '~/entities/User';
import cls from './SignInForm.module.scss';

const reducers: ReducersMap = {
  'sign-in_username': signInReducer,
};

export type SignInFormProps = {
  onSuccess: () => void;
} & PropsWithClassName;

const SignInForm = memo((props: SignInFormProps) => {
  const { className, onSuccess } = props;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const username = useSignInFormUsername();
  const password = useSignInFormPassword();
  const isLoading = useSignInFormIsLoading();
  const isFailed = useSignInFormIsFailed();
  const errorCode = useSignInFormErrorCode();

  const { updateUsername, updatePassword } = useSignInActions();
  const signInByUsername = useSignInByUsername();

  const onSubmitHandler = useCallback(
    async (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      const result = await signInByUsername({ username, password });
      const isSuccess = result.meta.requestStatus === 'fulfilled';

      if (isSuccess) {
        const authorizedUser = result.payload as User;
        const userId = authorizedUser.id;

        if (authorizedUser?.id) {
          navigate(getRouteProfile(userId));
        }

        onSuccess();
      }
    },
    [signInByUsername, username, password, onSuccess, navigate],
  );

  const onChangeUsername = useCallback(
    (newUsername: string) => {
      updateUsername(newUsername);
    },
    [updateUsername],
  );

  const onChangePassword = useCallback(
    (newPassword: string) => {
      updatePassword(newPassword);
    },
    [updatePassword],
  );

  const errorMessage = useMemo(() => {
    switch (errorCode) {
      case SignInByUsernameErrorCode.INCORRECT_DATA:
        return t('sign_in.failed', { defaultValue: "Can't sign-in with provided credentials!" });
      default:
        return '';
    }
  }, [errorCode, t]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <form onSubmit={onSubmitHandler} className={classNames(cls.form, {}, [className])}>
        <h3 className={classNames(cls.title)}>
          {t('sign_in.form_title', { defaultValue: 'Sign in form' })}
        </h3>

        <Input
          name="username"
          onChange={onChangeUsername}
          value={username}
          disabled={isLoading}
          autoFocus={true}
        />

        <Input
          name="password"
          onChange={onChangePassword}
          value={password}
          disabled={isLoading}
          type="password"
        />

        {Boolean(isFailed && errorCode) && <Text theme={TextTheme.ERROR} text={errorMessage} />}

        <Button rounded={ButtonRounded.M} theme={ButtonTheme.BG_INVERTED} disabled={isLoading}>
          {t('sign_in.action', { defaultValue: 'Sign in' })}
        </Button>
      </form>
    </DynamicReducerProvider>
  );
});

export default SignInForm;
