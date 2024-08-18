import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames';

import { Select, SelectTheme, SelectOption } from 'shared/ui/Select';
import * as cls from './LangSwitcher.module.scss';

const LANGS = [
  {
    title: 'EN',
    titleKey: 'languages.full.en',
    shortTitle: 'English',
    shortTitleKey: 'languages.short.en',
    value: 'en',
  },
  {
    title: 'UK',
    titleKey: 'languages.full.uk',
    shortTitle: 'Ukrainian',
    shortTitleKey: 'languages.short.uk',
    value: 'uk',
  },
];

type LangSwitcherProps = {
  className?: string;
  short?: boolean;
};

const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short = false } = props;

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
        wrapper: classNames(cls['wrapper'], {}, [className]),
        border: classNames(cls['border'], {}, [className]),
        select: classNames(cls['select'], {}, [className]),
      }}
      options={options}
      name="lang"
      onChange={changeLang}
      value={i18n.language}
    />
  );
});

export default LangSwitcher;
