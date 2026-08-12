import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash.capitalize';

import { TabItem } from '~/shared/ui/deprecated/Tabs';
import { PostTagsMap, PostTagsKey } from '~/entities/Post';

function usePostTags() {
  const { t } = useTranslation('pages.blog');

  const postTags = useMemo(() => {
    const items: Array<TabItem<PostTagsKey>> = [];

    Object.entries(PostTagsMap).forEach(([key, value]) => {
      items.push({
        content: t(`tags.${String(key).toLowerCase()}`, { defaultValue: capitalize(key) }),
        value,
      });
    });

    return items;
  }, [t]);

  return postTags;
}

export default usePostTags;
