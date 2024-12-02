import { memo } from 'react';

import classNames from 'shared/lib/classNames';
import { PostTextBlock } from '../../../../model/types/Post';
import * as cls from './TextBlockElement.module.scss';
import { Text } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';

type TextBlockElementProps = {
  block: PostTextBlock;
  hideTitle?: boolean;
} & PropsWithClassName;

const TextBlockElement = memo((props: TextBlockElementProps) => {
  const { className, block, hideTitle = false } = props;

  return (
    <VStack className={className}>
      {Boolean(block.title && !hideTitle) && (
        <Text title={block.title} className={classNames(cls.title)} />
      )}

      {block.paragraphs.map((paragraph) => {
        return <Text key={paragraph} text={paragraph} className={classNames(cls.paragraph)} />;
      })}
    </VStack>
  );
});

export default TextBlockElement;
