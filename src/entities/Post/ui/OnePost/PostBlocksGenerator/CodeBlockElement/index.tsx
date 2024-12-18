import { memo } from 'react';

import { Code } from '~/shared/ui/Code';
import { PostCodeBlock } from '../../../../model/types/Post';

type CodeBlockElementProps = {
  block: PostCodeBlock;
} & PropsWithClassName;

const CodeBlockElement = memo((props: CodeBlockElementProps) => {
  const { className, block } = props;

  return <Code className={className} text={block.code} />;
});

export default CodeBlockElement;
