import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
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

  const changeLang = async (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLang = event.target.value;

    await i18n.changeLanguage(nextLang);
  };

  return (
    <select
      name="lang"
      onChange={changeLang}
      value={i18n.language}
      className={classNames(cls['lang-switcher'], {}, [className])}
    >
      {LANGS.map((option) => {
        const { titleKey, title, shortTitleKey, shortTitle, value } = option;

        const transKey = short ? shortTitleKey : titleKey;
        const transDefaultValue = short ? shortTitle : title;

        const label = t(transKey, { defaultValue: transDefaultValue });

        return (
          <option value={value} key={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
});

export default LangSwitcher;
