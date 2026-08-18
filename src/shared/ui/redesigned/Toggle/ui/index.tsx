import { Field, Switch, Label } from '@headlessui/react';

import cls from './Toggle.module.scss';
import classNames from '~/shared/lib/classNames';

type ToggleProps = {
  enabled: boolean;
  onChange: (newEnabled: boolean) => void;
  label?: string;
  disabled?: boolean;
};

const Toggle = (props: ToggleProps) => {
  const { label, enabled, onChange, disabled = false } = props;

  return (
    <Field>
      <div className={cls.wrapper}>
        {Boolean(label?.length) && <Label className={cls.label}>{label}</Label>}

        <Switch
          checked={enabled}
          onChange={onChange}
          className={classNames(cls.switch, {
            [cls.enabled]: enabled,
          })}
          disabled={disabled}
        >
          <span
            className={classNames(cls.thumb, {
              [cls.enabled]: enabled,
            })}
          />
        </Switch>
      </div>
    </Field>
  );
};

export default Toggle;
