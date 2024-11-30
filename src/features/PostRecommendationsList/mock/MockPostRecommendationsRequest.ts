import {
  getOverriddenRequest,
  OverriddenRequestParams,
} from 'shared/config/storybook/helpers/withOverriddenRequest';
import { MockPostsListData } from 'entities/Post/mock/MockPostsListData';
import { Post } from 'entities/Post';

const overriddenRequest: OverriddenRequestParams<Array<Post>> = {
  // Should be like here: postRecommendationsApi.getPostRecommendations
  url: '/posts/?_limit=4',
  response: MockPostsListData.slice(0, 4),
};

const MockPostRecommendationsRequest = getOverriddenRequest(overriddenRequest);

export default MockPostRecommendationsRequest;
