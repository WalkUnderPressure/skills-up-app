import type { Meta as StorybookMeta, StoryObj as StorybookStoryObj, Args } from '@storybook/react';
import { MemoryRouterProps } from 'react-router-dom';

import { ThemesMapKey } from '~/app/providers/ThemeProvider';

export type RoutingParameters = {
  path?: string;
} & MemoryRouterProps;

export interface LokiParameters {
  /** Skip this story in Loki entirely, or only for specific configuration names */
  skip?: boolean | string[];
  /** CSS selector to crop the screenshot to (per-story override) */
  chromeSelector?: string;
}

export interface MockDataItem<D = unknown> {
  url: string;
  method: HttpMethod;
  status: number;
  response: D | undefined;
}

export interface ThemeParameters {
  themeOverride: ThemesMapKey;
}

type CustomParameters<D> = {
  loki?: LokiParameters;
  mockData?: MockDataItem<D>[];
  themes?: ThemeParameters;
  routing?: RoutingParameters;
};

type WithCustomParameters<TParameters, D> = TParameters & CustomParameters<D>;

export type Meta<TCmpOrArgs = Args, D = unknown> = Omit<StorybookMeta<TCmpOrArgs>, 'parameters'> & {
  parameters?: WithCustomParameters<StorybookMeta<TCmpOrArgs>['parameters'], D>;
};

export type StoryObj<TCmpOrArgs = Args, D = unknown> = Omit<
  StorybookStoryObj<TCmpOrArgs>,
  'parameters'
> & {
  parameters?: WithCustomParameters<StorybookStoryObj<TCmpOrArgs>['parameters'], D>;
};
