export enum PostBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface PostBlockBase {
  id: string;
  type: PostBlockType;
}

export interface PostCodeBlock extends PostBlockBase {
  type: PostBlockType.CODE;
  code: string;
}

export interface PostImageBlock extends PostBlockBase {
  type: PostBlockType.IMAGE;
  src: string;
  title: string;
}

export interface PostTextBlock extends PostBlockBase {
  type: PostBlockType.TEXT;
  paragraphs: Array<string>;
  title?: string;
}

export type PostBlock = PostCodeBlock | PostImageBlock | PostTextBlock;

export enum PostTags {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: number;
  tags: Array<PostTags>;
  blocks: Array<PostBlock>;
}
