import { ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import * as cls from './LangSwitcher.module.scss';

type LangSwitcherProps = {
    className?: string,
}

const LANGS = [
    {
        title: 'EN',
        value: 'en',
    },
    {
        title: 'UA',
        value: 'uk',
    },
]

function LangSwitcher(props: LangSwitcherProps) {
    const { className } = props

    const { i18n } = useTranslation()

    const changeLang = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const nextLang = event.target.value;

        i18n.changeLanguage(nextLang);
    }, [])

    return (
        <select
            name="lang"
            onChange={changeLang}
            value={i18n.language}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {LANGS.map((option) => {
                const { title, value } = option

                return (
                    <option
                        value={value}
                        key={value}
                    >
                        {title}
                    </option>
                )
            })}
        </select>
    )
}

export default LangSwitcher
