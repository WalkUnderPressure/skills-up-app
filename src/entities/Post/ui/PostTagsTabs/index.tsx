import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import capitalize from 'lodash.capitalize';

import { TabItem, Tabs } from '~/shared/ui/Tabs';
import classNames from '~/shared/lib/classNames';
import { PostTagsMap, PostTagsKey } from '../../model/types/Post';

type PostTagsTabsProps = {
  value: PostTagsKey;
  onChangeTab: (type: PostTagsKey) => void;
} & PropsWithClassName;

export const PostTagsTabs = memo((props: PostTagsTabsProps) => {
  const { className, value, onChangeTab } = props;

  const { t } = useTranslation('pages.blog');

  const typeTabs = useMemo(() => {
    const items: Array<TabItem<PostTagsKey>> = [];

    Object.entries(PostTagsMap).forEach(([key, value]) => {
      items.push({
        content: t(`tags.${String(key).toLowerCase()}`, { defaultValue: capitalize(key) }),
        value,
      });
    });

    return items;
  }, [t]);

  return (
    <Tabs<PostTagsKey>
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeTab}
      className={classNames('', {}, [className])}
    />
  );
});
