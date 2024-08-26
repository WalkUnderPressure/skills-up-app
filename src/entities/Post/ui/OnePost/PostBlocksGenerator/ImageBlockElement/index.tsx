import { memo } from 'react';

import classNames from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { PostImageBlock } from '../../../../model/types/Post';
import * as cls from './ImageBlockElement.module.scss';

type ImageBlockProps = {
  className?: string;
  block: PostImageBlock;
};

const ImageBlockElement = memo((props: ImageBlockProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls['image-block'], {}, [className])}>
      <div className={classNames(cls['image-wrapper'])}>
        <img className={classNames(cls.image)} src={block?.src} alt={block?.title} />
      </div>

      {Boolean(block?.title) && <Text className={classNames(cls.title)} text={block?.title} />}
    </div>
  );
});

export default ImageBlockElement;
