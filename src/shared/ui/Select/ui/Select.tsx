import { ChangeEvent, SelectHTMLAttributes, useCallback, useId } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './Select.module.scss';
import genericMemo from 'shared/lib/genericMemo';

export enum SelectTheme {
  DEFAULT = '',
  INVERTED = 'inverted',
}

export type SelectOption<T extends string = string> = {
  label: string;
  value: T;
};

export type SelectProps<T extends string = string> = {
  className?: {
    wrapper?: string;
    border?: string;
    select?: string;
  };
  onChange?: (value: T) => void;
  theme?: SelectTheme;
  options: Array<SelectOption<T>>;
  label?: string;
  readOnly?: boolean;
  fullH?: boolean;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'className'>;

const Select = genericMemo(<T extends string>(props: SelectProps<T>) => {
  const {
    label,
    className,
    onChange,
    theme = SelectTheme.DEFAULT,
    options = [],
    readOnly,
    disabled,
    fullH,
    ...restProps
  } = props;

  const selectId = useId();

  const isDisabled = disabled || readOnly;

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        const selectedValue = event.target.value as T;
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
          className={classNames(
            cls['select'],
            { [cls['readonly']]: readOnly, [cls['full-h']]: fullH },
            [className?.select, cls[theme]],
          )}
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
