import { useTranslation } from 'react-i18next';
import { ChangeEvent } from 'react';

import { Button, ButtonTheme, ButtonRounded } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import * as cls from './SignInForm.module.scss';

type SignInFormProps = {
  className?: string;
};

const SignInForm = (props: SignInFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const onSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit event', event);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classNames(cls['sign-in-form'], {}, [className])}>
      <h3>{t('sign_in.form_title', { defaultValue: 'Sign in form' })}</h3>

      <Input autoFocus={true} name="username" />

      <Input name="password" />

      <Button rounded={ButtonRounded.M} theme={ButtonTheme.BG_INVERTED}>
        {t('sign_in.action', { defaultValue: 'Sign in' })}
      </Button>
    </form>
  );
};

export default SignInForm;
