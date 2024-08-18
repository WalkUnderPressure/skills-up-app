import { ChangeEvent, memo, SelectHTMLAttributes, useCallback, useId } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './Select.module.scss';

export enum SelectTheme {
  DEFAULT = '',
  INVERTED = 'inverted',
}

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  className?: {
    wrapper?: string;
    border?: string;
    select?: string;
  };
  onChange?: (value: string) => void;
  theme?: SelectTheme;
  options: Array<SelectOption>;
  label?: string;
  readOnly?: boolean;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'className'>;

const Select = memo((props: SelectProps) => {
  const {
    label,
    className,
    onChange,
    theme = SelectTheme.DEFAULT,
    options = [],
    readOnly,
    disabled,
    ...restProps
  } = props;

  const selectId = useId();

  const isDisabled = disabled || readOnly;

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        const selectedValue = event.target.value;
        onChange(selectedValue);
      }
    },
    [onChange],
  );

  return (
    <div className={classNames(cls['select-wrapper'], {}, [className?.wrapper])}>
      {label && (
        <label className={classNames(cls.label)} htmlFor={selectId}>
          {label}
        </label>
      )}

      <div className={classNames(cls['select-border'], {}, [className?.border])}>
        <select
          id={selectId}
          className={classNames(cls['select'], { [cls['readonly']]: readOnly }, [
            className?.select,
            cls[theme],
          ])}
          onChange={onChangeHandler}
          disabled={isDisabled}
          {...restProps}
        >
          {options.map((opt) => {
            const { label, value } = opt;

            return (
              <option key={value} value={value} className={classNames(cls.option)}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
});

export default Select;
