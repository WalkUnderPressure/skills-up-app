import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '~/entities/User';
import { getPostDetails } from '~/entities/Post';

const getIsUserCanEditPost = createSelector(getUserAuthData, getPostDetails, (user, post) => {
  if (!user || !post) {
    return false;
  } else {
    return user.id === post.userId;
  }
});

export { getIsUserCanEditPost };
