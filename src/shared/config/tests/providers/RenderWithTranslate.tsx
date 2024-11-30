import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n, { DEFAULT_LNG, DEFAULT_NS } from 'shared/config/i18n/i18nForTests';

type I18nAddResource = {
  lng?: string;
  ns?: string;
  // TODO: specify for recursive resources
  resources: { [key: string]: string };
};

type RenderWithTranslateProps = {
  resources?: Array<I18nAddResource>;
} & PropsWithChildren;

const RenderWithTranslate = (props: RenderWithTranslateProps) => {
  const { children, resources = [] } = props;

  resources.forEach((resource) => {
    const { lng = DEFAULT_LNG, ns = DEFAULT_NS, resources } = resource;

    i18n.addResources(lng, ns, resources);
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export { RenderWithTranslate };
export type { RenderWithTranslateProps };
