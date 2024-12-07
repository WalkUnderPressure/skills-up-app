import { memo, useState } from 'react';

import classNames from '~/shared/lib/classNames';
import { HStack } from '~/shared/ui/Stack';
import StarIcon from '~/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';

export type StarRatingProps = {
  rating?: number;
  onSelect?: (rating: number) => void;
} & PropsWithClassName;

const STARS_LIST = [1, 2, 3, 4, 5];
const STAR_SIZE = 32;

const StarRating = memo((props: StarRatingProps) => {
  const { className, rating = 0, onSelect } = props;

  const [hoveredStar, setHoveredStar] = useState(rating);
  const [isRatingSelected, setIsRatingSelected] = useState(Boolean(rating));

  const onHoverStar = (starValue: number) => () => {
    if (!isRatingSelected) {
      setHoveredStar(starValue);
    }
  };

  const onLeaveStar = () => {
    if (!isRatingSelected) {
      setHoveredStar(0);
    }
  };

  const onSelectHandler = (starValue: number) => () => {
    if (!isRatingSelected) {
      onSelect?.(starValue);
      setHoveredStar(starValue);
      setIsRatingSelected(true);
    }
  };

  return (
    <HStack
      align="center"
      justify="center"
      gap="8"
      className={classNames(cls.box, {}, [className])}
      onMouseLeave={onLeaveStar}
    >
      {STARS_LIST.map((starValue) => {
        const isStarHovered = starValue <= hoveredStar;

        return (
          <StarIcon
            key={`StarRating_${starValue}`}
            width={STAR_SIZE}
            height={STAR_SIZE}
            className={classNames(cls.star, {
              [cls.hovered]: isStarHovered,
              [cls.unrated]: !isRatingSelected,
            })}
            onMouseEnter={onHoverStar(starValue)}
            onClick={onSelectHandler(starValue)}
          />
        );
      })}
    </HStack>
  );
});

export default StarRating;
