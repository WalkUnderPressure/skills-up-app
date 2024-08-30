import { faker } from '@faker-js/faker';

import {
  PostBlockType,
  PostTagsMap,
  PostTagsKey,
  Post,
} from '../../src/entities/Post/model/types/Post';
import {
  MockPostDetailsData,
  MockPostDetailsDataTwo,
} from '../../src/entities/Post/mock/MockPostDetailsData';
import randomInArray from '../lib/randomInArray';

type PostSchema = Post;

function getPosts(): { posts: Array<PostSchema> } {
  const data = { posts: [MockPostDetailsData, MockPostDetailsDataTwo] };

  const addPostsCount = 24;
  for (let i = 0; i < addPostsCount; i++) {
    const userId = randomInArray<string>(['1', '2']);

    data.posts.push({
      id: faker.string.uuid().slice(0, 8),
      profileId: userId,
      userId: userId,
      title: faker.word.words({ count: { min: 3, max: 15 } }),
      subtitle: faker.word.words({ count: { min: 3, max: 15 } }),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MANNapoli_124545_plato%27s_academy_mosaic.jpg/920px-MANNapoli_124545_plato%27s_academy_mosaic.jpg',
      views: faker.number.int({ min: 20, max: 500_000 }),
      createdAt: new Date(faker.date.anytime()).getTime(),
      tags: [
        randomInArray<PostTagsKey>([PostTagsMap.SCIENCE, PostTagsMap.IT, PostTagsMap.ECONOMICS]) ??
          PostTagsMap.SCIENCE,
      ],
      blocks: [
        {
          id: '1',
          type: PostBlockType.TEXT,
          title: faker.word.words({ count: { min: 3, max: 15 } }),
          paragraphs: [
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
          ],
        },
      ],
    });
  }

  return data;
}

export { getPosts, PostSchema };
