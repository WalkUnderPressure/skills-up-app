import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import { Page } from 'shared/ui/Page';

import HtmlImage from 'shared/assets/images/html.png';

export type AboutPageProps = {
  className?: string;
};

const AboutPage = (props: AboutPageProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.about');

  return (
    <Page className={classNames(className)}>
      <h3>{t('title', { defaultValue: 'About page' })}</h3>

      <img src={HtmlImage} />
    </Page>
  );
};

export default AboutPage;
