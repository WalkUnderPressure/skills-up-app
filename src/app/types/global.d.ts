declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare type SvgIconType = import('react').FunctionComponent<
  import('react').SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

declare module '*.svg' {
  const ReactComponent: SvgIconType;

  export default ReactComponent;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;
declare const __PROJECT__: 'app' | 'jest' | 'storybook';

declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

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

declare type PropsWithClassName = {
  className?: string;
};
