import { memo, useMemo } from 'react';

import { PostBlock, PostBlockType } from '../../model/types/Post';
import ImageBlockElement from './ImageBlockElement';
import CodeBlockElement from './CodeBlockElement';
import TextBlockElement from './TextBlockElement';

type BlocksGeneratorProps = {
  block: PostBlock;
};

const PostBlocksGenerator = memo((props: BlocksGeneratorProps) => {
  const { block } = props;

  const element = useMemo(() => {
    switch (block.type) {
      case PostBlockType.TEXT:
        return <TextBlockElement block={block} />;
      case PostBlockType.IMAGE:
        return <ImageBlockElement block={block} />;
      case PostBlockType.CODE:
        return <CodeBlockElement block={block} />;
      default:
        return null;
    }
  }, [block]);

  return element;
});

export default PostBlocksGenerator;
