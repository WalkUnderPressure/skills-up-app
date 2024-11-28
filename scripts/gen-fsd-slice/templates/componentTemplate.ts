import getStyleName from '../helpers/getStyleName';

const componentTemplate = (componentName: string) => `
import { memo } from 'react';
// import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';

import * as cls from './${componentName}.module.scss';

type ${componentName}Props = {
    className?: string;
}

const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;

    // const { t } = useTranslation();
    
    return (
        <div className={classNames(cls['${getStyleName(componentName)}'], {}, [className])}>
           
        </div>
    );
});

export default ${componentName};
`;

export default componentTemplate;
