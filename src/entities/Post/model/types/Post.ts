import { Profile } from 'entities/Profile';

enum PostBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

enum PostTags {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

const PostViewMap = Object.freeze({
  SHORT: 'short',
  FULL: 'full',
});

type PostViewKey = (typeof PostViewMap)[keyof typeof PostViewMap];

interface PostBlockBase {
  id: string;
  type: PostBlockType;
}

interface PostCodeBlock extends PostBlockBase {
  type: PostBlockType.CODE;
  code: string;
}

interface PostImageBlock extends PostBlockBase {
  type: PostBlockType.IMAGE;
  src: string;
  title: string;
}

interface PostTextBlock extends PostBlockBase {
  type: PostBlockType.TEXT;
  paragraphs: Array<string>;
  title?: string;
}

type PostBlock = PostCodeBlock | PostImageBlock | PostTextBlock;

interface Post {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: number;
  tags: Array<PostTags>;
  blocks: Array<PostBlock>;
  profile?: Profile;
  profileId?: string;
}

export {
  PostBlockType,
  PostTags,
  PostBlockBase,
  PostCodeBlock,
  PostImageBlock,
  PostTextBlock,
  PostBlock,
  Post,
  PostViewMap,
  PostViewKey,
};
