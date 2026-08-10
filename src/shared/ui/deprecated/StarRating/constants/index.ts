export const StarRatingDataTestIds = {
  Star: 'StarRatingDataTestIds.Start',
  Section: 'StarRatingDataTestIds.Section',
  getByStarValue: (starValue: number) => `${StarRatingDataTestIds.Star}.${starValue}`,
};
