import { PostSortFieldsMap, PostTagsKey, PostTagsMap, PostViewMap } from '~/entities/Post';
import { SortOrder } from '~/shared/types/SortOrder';

export const DEFAULT_POST_VIEW_TYPE = PostViewMap.SHORT;
export const DEFAULT_POST_SHORT_LIMIT = 12;
export const DEFAULT_POST_FULL_LIMIT = 4;
export const DEFAULT_SORT_FIELD = PostSortFieldsMap.CREATED_AT;
export const DEFAULT_SORT_ORDER: SortOrder = 'asc';
export const DEFAULT_SEARCH_TAG: PostTagsKey = PostTagsMap.ALL;
