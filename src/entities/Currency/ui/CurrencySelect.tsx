import { Select, SelectOption, SelectProps } from 'shared/ui/Select';
import { CurrencyMap } from '../model/types/currencies';

type CurrencySelectProps = {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
} & Omit<SelectProps, 'options'>;

const CURRENCY_OPTIONS: Array<SelectOption> = CurrencyMap.map((currency) => ({
  label: currency,
  value: currency,
}));

const CurrencySelect = (props: CurrencySelectProps) => {
  const { value, label, className, onChange, ...restProps } = props;

  return (
    <Select
      {...restProps}
      className={className}
      onChange={onChange}
      value={value}
      label={label}
      options={CURRENCY_OPTIONS}
    />
  );
};

export default CurrencySelect;
