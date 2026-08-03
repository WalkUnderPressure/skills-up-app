import { PostRatingDataTestIds } from '~/features/PostRating/constants';
import { StarRatingDataTestIds } from '~/shared/ui/StarRating/constants';

const addRating = (ratingValue: number) => {
  cy.getByDataTestId(StarRatingDataTestIds.Section).scrollIntoView();

  cy.getByDataTestId(StarRatingDataTestIds.getByStarValue(ratingValue)).click();
  cy.wait(500); // delay to wait open modal
  cy.getByDataTestId(PostRatingDataTestIds.RatingCard.SubmitBtn).click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addRating: (ratingValue: number) => Chainable<void>;
    }
  }
}

export { addRating };
