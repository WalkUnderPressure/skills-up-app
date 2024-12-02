import { ListBox, ListBoxItem, ListBoxProps } from 'shared/ui/Popups';
import { CurrencyMap, CurrencyMapKey } from '../model/types/currencies';

type CurrencySelectProps = {
  className?: string;
  value?: CurrencyMapKey;
  label?: string;
  onChange?: (value: string) => void;
} & ListBoxProps<CurrencyMapKey>;

const CURRENCY_OPTIONS: Array<ListBoxItem<CurrencyMapKey>> = Object.entries(CurrencyMap).map(
  ([currencyName, currencyValue]) => ({
    content: currencyName,
    value: currencyValue,
  }),
);

const CurrencySelect = (props: CurrencySelectProps) => {
  const { value, defaultValue, label, className, onChange, ...restProps } = props;

  return (
    <ListBox<CurrencyMapKey>
      {...restProps}
      className={className}
      label={label}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      items={CURRENCY_OPTIONS}
    />
  );
};

export default CurrencySelect;
