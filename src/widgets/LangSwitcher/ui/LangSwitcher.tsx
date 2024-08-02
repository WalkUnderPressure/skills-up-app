import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import * as cls from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
};

const LANGS = [
  {
    title: 'EN',
    value: 'en',
  },
  {
    title: 'UA',
    value: 'uk',
  },
];

const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;

  const { i18n } = useTranslation();

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
        const { title, value } = option;

        return (
          <option value={value} key={value}>
            {title}
          </option>
        );
      })}
    </select>
  );
};

export default LangSwitcher;
