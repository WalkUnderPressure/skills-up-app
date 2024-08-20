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
declare const __PROJECT__: 'app' | 'jest' | 'storybook';

declare type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

declare type PartialRecord<K, T> = {
  [P in K]?: T;
};

declare type Nullable<T> = T | null | undefined;

declare type EmptyObject = Record<string, never>;

// App
declare type ErrorData<T> = {
  isFailed?: boolean;
  errorCode?: Nullable<T>;
};
