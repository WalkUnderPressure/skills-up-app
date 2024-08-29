import { Profile } from 'entities/Profile';

enum PostBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

const PostTagsMap = Object.freeze({
  ALL: 'ALL',
  IT: 'IT',
  SCIENCE: 'SCIENCE',
  ECONOMICS: 'ECONOMICS',
});

type PostTagsKey = (typeof PostTagsMap)[keyof typeof PostTagsMap];

const PostViewMap = Object.freeze({
  SHORT: 'short',
  FULL: 'full',
});

type PostViewKey = (typeof PostViewMap)[keyof typeof PostViewMap];

const PostSortFieldsMap = Object.freeze({
  TITLE: 'title',
  VIEWS: 'views',
  CREATED_AT: 'createdAt',
});

type PostSortFieldsKey = (typeof PostSortFieldsMap)[keyof typeof PostSortFieldsMap];

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
  tags: Array<PostTagsKey>;
  blocks: Array<PostBlock>;
  profile?: Profile;
  profileId?: string;
}

export {
  PostBlockType,
  PostTagsMap,
  PostTagsKey,
  PostBlockBase,
  PostCodeBlock,
  PostImageBlock,
  PostTextBlock,
  PostBlock,
  Post,
  PostViewMap,
  PostViewKey,
  PostSortFieldsMap,
  PostSortFieldsKey,
};
