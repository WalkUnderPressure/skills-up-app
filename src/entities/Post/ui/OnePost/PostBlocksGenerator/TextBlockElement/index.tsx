import { memo } from 'react';

import classNames from '~/shared/lib/classNames';
import { PostTextBlock } from '../../../../model/types/Post';
import cls from './TextBlockElement.module.scss';
import { Text as TextDeprecated } from '~/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '~/shared/ui/redesigned/Text';
import { VStack } from '~/shared/ui/redesigned/Stack';
import { useToggleFeatures } from '~/entities/User';

type TextBlockElementProps = {
  block: PostTextBlock;
  hideTitle?: boolean;
} & PropsWithClassName;

const TextBlockElement = memo((props: TextBlockElementProps) => {
  const { className, block, hideTitle = false } = props;

  const Text = useToggleFeatures({
    feature: 'redesign',
    on: () => TextRedesigned,
    off: () => TextDeprecated,
  });

  return (
    <VStack className={className}>
      {Boolean(block.title && !hideTitle) && (
        <Text title={block.title} className={classNames(cls.title)} />
      )}

      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={classNames(cls.paragraph)} />
      ))}
    </VStack>
  );
});

export default TextBlockElement;
