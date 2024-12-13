import { createSelector } from '@reduxjs/toolkit';

import { buildAppSelector } from '~/shared/lib/store';
import { getUserAuthData } from '~/entities/User';
import { getPostDetails } from '~/entities/Post';

export const [useIsUserCanEditPost, getIsUserCanEditPost] = buildAppSelector(
  createSelector(getUserAuthData, getPostDetails, (user, post) => {
    if (!user || !post) {
      return false;
    } else {
      return user.id === post.userId;
    }
  }),
);
