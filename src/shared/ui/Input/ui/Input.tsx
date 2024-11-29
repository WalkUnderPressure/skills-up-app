import { ChangeEvent, InputHTMLAttributes, memo, useCallback, useId } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './Input.module.scss';

export const InputErrorDataTestId = 'InputErrorDataTestId';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type InputProps = {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  label?: string;
  'data-testid'?: string;
} & HtmlInputProps;

const Input = memo((props: InputProps) => {
  const {
    className,
    errorMessage,
    label,
    value = '',
    onChange,
    type = 'text',
    'data-testid': dataTestId,
    ...restProps
  } = props;

  const inputId = useId();
  const errorDataTestId = dataTestId + InputErrorDataTestId;

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;

      if (onChange) {
        onChange(nextValue);
      }
    },
    [onChange],
  );

  return (
    <div className={classNames(cls['input-wrapper'])}>
      {label && (
        <label className={classNames(cls.label)} htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...restProps}
        data-testid={dataTestId}
        className={classNames(cls['input'], { [cls.error]: errorMessage }, [className])}
      />

      {errorMessage && (
        <span data-testid={errorDataTestId} className={classNames(cls['error-message'])}>
          {errorMessage}
        </span>
      )}
    </div>
  );
});

export default Input;
