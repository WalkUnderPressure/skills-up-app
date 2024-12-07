import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import RatingCard from '.';

const meta = {
  title: 'Entities/RatingCard',
  component: RatingCard,
  args: {
    title: 'Please choose rating',
  },
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;

export const LightWithRating = {
  args: {
    rating: 4,
  },
} satisfies Story;
