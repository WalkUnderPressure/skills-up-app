import { AddCommentaryFormDataTestIds } from '~/features/AddCommentaryForm/constants';
import { CommentaryCardDataTestIds } from '~/entities/Commentary/constants';
import { StarRatingDataTestIds } from '~/shared/ui/StarRating/constants';
import { getRoutePost } from '~/shared/constants/appRoutes';

let postId: string = '';

describe('Check Post page functionality', () => {
  const visitPostPage = (postToVisitId: string) => {
    if (postToVisitId === '') {
      throw Error('visitPostPage - postToVisitId is empty!');
    }

    return cy.visit(getRoutePost(postToVisitId));
  };

  beforeEach(() => {
    cy.login().then(() => {
      cy.createPost().then((postData) => {
        postId = postData.id;

        visitPostPage(postId);

        cy.interceptFixture('GET', '**/posts/?_limit=4', 'post-recommendations.json').as(
          'FixturePostRecommendations',
        );
      });
    });
  });

  afterEach(() => {
    cy.login().then(() => {
      cy.deletePost(postId);
    });
  });

  it('should have list of recommendations', () => {});

  it.skip('set post rating', () => {
    const newPostRating = 4;

    cy.addRating(newPostRating);

    cy.login().then(() => {
      visitPostPage(postId).then(() => {
        cy.getByDataTestId(StarRatingDataTestIds.Section).scrollIntoView();

        cy.getByDataTestId(StarRatingDataTestIds.Section)
          .get('[data-selected="true"]')
          .should('have.length', newPostRating);
      });
    });
  });

  it('Check add post commentary', () => {
    const testCommentaryText = 'This post was commented!';

    cy.getByDataTestId(AddCommentaryFormDataTestIds.Form).scrollIntoView();
    cy.addCommentary(testCommentaryText);
    cy.getByDataTestId(AddCommentaryFormDataTestIds.Input).should('be.empty');

    cy.reload();

    cy.login().then(() => {
      visitPostPage(postId);

      cy.getByDataTestId(CommentaryCardDataTestIds.Item)
        .contains(testCommentaryText)
        .should('have.length', 1);
    });
  });
});
