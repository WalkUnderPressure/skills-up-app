import { memo } from 'react';

import classNames from 'shared/lib/classNames';
import { PostTextBlock } from '../../../../model/types/Post';
import * as cls from './TextBlockElement.module.scss';
import { Text } from 'shared/ui/Text';

type TextBlockElementProps = {
  className?: string;
  block: PostTextBlock;
  hideTitle?: boolean;
};

const TextBlockElement = memo((props: TextBlockElementProps) => {
  const { className, block, hideTitle = false } = props;

  return (
    <div className={classNames(cls['text-block'], {}, [className])}>
      {Boolean(block.title && !hideTitle) && (
        <Text title={block.title} className={classNames(cls.title)} />
      )}

      {block.paragraphs.map((paragraph) => {
        return <Text key={paragraph} text={paragraph} className={classNames(cls.paragraph)} />;
      })}
    </div>
  );
});

export default TextBlockElement;
