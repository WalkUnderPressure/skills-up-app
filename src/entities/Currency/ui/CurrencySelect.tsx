import {
  ListBox as ListBoxDeprecated,
  ListBoxItem,
  ListBoxProps,
} from '~/shared/ui/deprecated/Popups';
import { ListBox } from '~/shared/ui/redesigned/Popups';
import { CurrencyMap, CurrencyMapKey } from '../model/types/currencies';
import { ToggleFeatures } from '~/entities/User';

type CurrencySelectProps = {
  value?: CurrencyMapKey;
  label?: string;
  onChange?: (value: string) => void;
} & ListBoxProps<CurrencyMapKey> &
  PropsWithClassName &
  PropsWithDataTestId;

const CURRENCY_OPTIONS: Array<ListBoxItem<CurrencyMapKey>> = Object.entries(CurrencyMap).map(
  ([currencyName, currencyValue]) => ({
    label: currencyName,
    value: currencyValue,
  }),
);

const CurrencySelect = (props: CurrencySelectProps) => {
  const { value, defaultValue, label, className, onChange, ...restProps } = props;

  const itemProps: ListBoxProps<CurrencyMapKey> = {
    ...restProps,
    className,
    label,
    onChange,
    value,
    defaultValue,
    items: CURRENCY_OPTIONS,
  };

  return (
    <ToggleFeatures
      feature="redesign"
      on={<ListBox {...itemProps} />}
      off={<ListBoxDeprecated {...itemProps} />}
    />
  );
};

export default CurrencySelect;
