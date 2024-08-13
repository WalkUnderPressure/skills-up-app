import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignInByUsernameErrorCode } from 'features/SignInByUsername';
import { Button, ButtonTheme, ButtonRounded } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import classNames from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { signInByUsername } from '../../model/services/signInByUsername';
import { getSignInState } from '../../model/selectors/getSignInState';
import { signInActions } from '../../model/slice/signInSlice';
import * as cls from './SignInForm.module.scss';

type SignInFormProps = {
  className?: string;
};

const SignInForm = memo((props: SignInFormProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, isFailed, errorCode } = useSelector(getSignInState);

  const onSubmitHandler = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      // @ts-expect-error TODO: Add types dispatch
      dispatch(signInByUsername({ username, password }));
    },
    [dispatch, password, username],
  );

  const onChangeUsername = useCallback(
    (newUsername: string) => {
      dispatch(signInActions.updateUsername(newUsername));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (newPassword: string) => {
      dispatch(signInActions.updatePassword(newPassword));
    },
    [dispatch],
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
    <form onSubmit={onSubmitHandler} className={classNames(cls['sign-in-form'], {}, [className])}>
      <h3>{t('sign_in.form_title', { defaultValue: 'Sign in form' })}</h3>

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
  );
});

export default SignInForm;
