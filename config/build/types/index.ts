export type BuildMode = 'development' | 'production';

export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
};

export type BuildOptions = {
  mode: BuildMode;
  isDev: boolean;
  paths: BuildPaths;
  port: number;
  withAnalyze: boolean;
};

export type BuildEnv = {
  port: number;
  mode: BuildMode;
  analyze: boolean;
};
