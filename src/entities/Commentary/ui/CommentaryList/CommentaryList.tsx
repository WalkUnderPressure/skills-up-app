import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import CommentaryCardSkeleton from '../CommentaryCardSkeleton/CommentaryCardSkeleton';
import CommentaryCard from '../CommentaryCard/CommentaryCard';
import { Commentary } from '../../model/types/commentary';
import * as cls from './CommentaryList.module.scss';

const LOADING_COMMENTARY_ITEMS = Array.from({ length: 3 }, (x, i) => i);

type CommentaryListProps = {
  className?: string;
  commentaries?: Array<Commentary>;
  isLoading?: boolean;
  title?: string;
};

const CommentaryList = memo((props: CommentaryListProps) => {
  const { className, title = '', commentaries = [], isLoading = false } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls['commentary-list'], {}, [className])}>
      <Text title={title || t('commentaries.title', { defaultValue: 'Commentaries' })} />

      {isLoading ? (
        <div className={classNames(cls.commentaries)}>
          {LOADING_COMMENTARY_ITEMS.map((index) => (
            <CommentaryCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {commentaries?.length ? (
            <div className={classNames(cls.commentaries)}>
              {commentaries.map((commentary) => {
                return <CommentaryCard key={commentary.id} commentary={commentary} />;
              })}
            </div>
          ) : (
            <Text
              text={t('commentaries.empty', { defaultValue: 'There are no comments here yet.' })}
            />
          )}
        </>
      )}
    </div>
  );
});

export default CommentaryList;
