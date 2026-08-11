import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Select, SelectTheme, SelectOption } from '~/shared/ui/deprecated/Select';
import classNames from '~/shared/lib/classNames';
import cls from './LangSwitcher.module.scss';
import { LANGS } from '../constants/langs';

type LangSwitcherDeprecatedProps = {
  short?: boolean;
  wrapperClassName?: string;
  borderClassName?: string;
  selectClassName?: string;
};

const LangSwitcherDeprecated = memo((props: LangSwitcherDeprecatedProps) => {
  const {
    wrapperClassName = '',
    borderClassName = '',
    selectClassName = '',
    short = false,
  } = props;

  const { i18n, t } = useTranslation();

  const changeLang = useCallback(
    async (nextLang: string) => {
      await i18n.changeLanguage(nextLang);
    },
    [i18n],
  );

  const options = useMemo<Array<SelectOption>>(() => {
    return LANGS.map((option) => {
      const { titleKey, title, shortTitleKey, shortTitle, value } = option;

      const transKey = short ? shortTitleKey : titleKey;
      const transDefaultValue = short ? shortTitle : title;

      const label = t(transKey, { defaultValue: transDefaultValue });

      return { label, value };
    });
  }, [short, t]);

  return (
    <Select
      theme={SelectTheme.INVERTED}
      className={{
        wrapper: classNames(cls['wrapper'], {}, [wrapperClassName]),
        border: classNames(cls['border'], {}, [borderClassName]),
        select: classNames(cls['select'], {}, [selectClassName]),
      }}
      options={options}
      name="lang"
      onChange={changeLang}
      value={i18n.language}
    />
  );
});

export default LangSwitcherDeprecated;
