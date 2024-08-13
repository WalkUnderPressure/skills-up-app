import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import HtmlImage from 'shared/assets/images/html.png';

export type AboutPageProps = {
  className?: string;
};

const AboutPage = (props: AboutPageProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.about');

  return (
    <div className={classNames(className)}>
      <h3>{t('title', { defaultValue: 'About page' })}</h3>

      <img src={HtmlImage} />
    </div>
  );
};

export default AboutPage;
