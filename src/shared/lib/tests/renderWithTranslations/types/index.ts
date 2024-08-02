export type I18nAddResource = {
  lng?: string;
  ns?: string;
  // TODO: specify for recursive resources
  resources: { [key: string]: string };
};
