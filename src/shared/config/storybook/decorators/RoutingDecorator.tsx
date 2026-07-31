import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import type { StoryFn, StoryContext } from '@storybook/react';

const RoutingDecorator = (Story: StoryFn, context: StoryContext) => {
  const { parameters } = context;

  const { initialEntries = ['/'], path = '/' } = parameters.routing ?? {};

  const router = createMemoryRouter(
    [
      {
        path,
        element: <Story />,
      },
    ],
    { initialEntries },
  );

  return <RouterProvider router={router} />;
};

export default RoutingDecorator;
