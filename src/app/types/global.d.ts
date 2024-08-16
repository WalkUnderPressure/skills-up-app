declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

  export default ReactComponent;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;

declare type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
