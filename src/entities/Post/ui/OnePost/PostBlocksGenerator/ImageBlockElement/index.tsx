import { memo } from 'react';

import classNames from '~/shared/lib/classNames';
import { AppImage } from '~/shared/ui/AppImage';
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
        <AppImage
          src={block?.src}
          alt={block?.title}
          Fallback={<></>}
          ErrorFallback={<></>}
          className={cls.image}
        />
      </div>

      {Boolean(block?.title) && <Text className={classNames(cls.title)} text={block?.title} />}
    </VStack>
  );
});

export default ImageBlockElement;
