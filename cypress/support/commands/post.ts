import { Post, PostBlockType } from '~/entities/Post/model/types/Post';
import { postsApiRoutes } from '~/entities/Post/api/postsApiRoutes';

const DEFAULT_MOCK_POST_DATA: Post = {
  id: '',
  userId: '',
  title: 'Javascript news',
  subtitle: "What's new in JS for 2024?",
  img: '',
  views: 681,
  createdAt: 1724270894246,
  tags: ['IT'],
  blocks: [
    {
      id: '1',
      type: PostBlockType.TEXT,
      title: 'ECMAScript Updates',
      paragraphs: [
        'A new version of JS always causes a stir. Since the ES6 update there has been a new version every year, and we’re expecting this year’s (ES2024) to land around June.',
        'ES6 was a massive release that came six years after its predecessor, ES5. Browser vendors and JavaScript developers were overwhelmed with the sheer number of new features to adopt and learn. Since then, to prevent such a big drop of new features happening at once, there’s been a yearly release cycle.',
        'This yearly release cycle involves proposing any new features, which are then discussed, evaluated, then voted on by a committee before they’re added to the language. This process also allows browsers to try to implement the proposals before they’re officially added to the language, which may help iron out any implementation problems.',
      ],
    },
  ],
};

const createPost = (postData: Partial<Post>) => {
  const createPostData = postData ?? DEFAULT_MOCK_POST_DATA;

  return cy
    .requestWithAuth<Post>({
      method: 'POST',
      url: postsApiRoutes.base,
      data: createPostData,
    })
    .then((response) => response.body);
};

const deletePost = (postId: string) => {
  //TODO - delete comments and rating after tests

  cy.requestWithAuth({
    method: 'DELETE',
    url: postsApiRoutes.byPostId(postId),
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createPost: (postData?: Partial<Post>) => Chainable<Post>;
      deletePost: (postId: string) => Chainable<void>;
    }
  }
}

export { createPost, deletePost };
