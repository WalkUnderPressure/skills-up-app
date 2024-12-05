import { memo } from 'react';

import classNames from '~/shared/lib/classNames';
import { VStack } from '~/shared/ui/Stack';
import { Text } from '~/shared/ui/Text';
import { PostImageBlock } from '../../../../model/types/Post';
import cls from './ImageBlockElement.module.scss';

type ImageBlockProps = {
  block: PostImageBlock;
} & PropsWithClassName;

const ImageBlockElement = memo((props: ImageBlockProps) => {
  const { className, block } = props;

  return (
    <VStack gap="8" className={className}>
      <div className={classNames(cls['image-wrapper'])}>
        <img className={classNames(cls.image)} src={block?.src} alt={block?.title} />
      </div>

      {Boolean(block?.title) && <Text className={classNames(cls.title)} text={block?.title} />}
    </VStack>
  );
});

export default ImageBlockElement;
