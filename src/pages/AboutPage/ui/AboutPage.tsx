import { useTranslation } from 'react-i18next'

import HtmlImage from 'shared/assets/images/html.png'

function AboutPage() {
  const { t } = useTranslation('pages.about')

  return (
    <div>
      <h3>{t('title', { defaultValue: 'About page' })}</h3>

      <img src={HtmlImage} />
    </div>
  )
}

export default AboutPage
