import { StoryObj } from '@storybook/react/*';

export type OverriddenRequestParams<D> = {
  url?: string;
  method?: HttpMethod;
  status?: number;
  response?: D;
};

const getOverriddenRequest = <D>(reqConfig: OverriddenRequestParams<D>) => {
  const { url = '', method = 'GET', status = 200, response } = reqConfig;

  return {
    mockData: [
      {
        url: `${__API_URL__}${url}`,
        method,
        status,
        response,
      },
    ],
  };
};

// https://storybook-addon-mock.netlify.app/?path=/docs/docs-installation--docs
const withOverriddenRequest = <T, D>(config: StoryObj<T>) => {
  return (reqConfig: OverriddenRequestParams<D>): StoryObj<T> => {
    return {
      ...config,
      parameters: {
        ...config.parameters,
        ...getOverriddenRequest<D>(reqConfig),
      },
    };
  };
};

export { getOverriddenRequest, withOverriddenRequest };
