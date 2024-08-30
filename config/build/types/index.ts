export type BuildMode = 'development' | 'production';

export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
};

export type BuildOptions = {
  mode: BuildMode;
  isDev: boolean;
  apiUrl: string;
  paths: BuildPaths;
  port: number;
  withAnalyze: boolean;
  project: 'app' | 'jest' | 'storybook';
};

export type BuildEnv = {
  port: number;
  mode: BuildMode;
  analyze: boolean;
  apiUrl: string;
};
