import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '~/shared/ui/Stack';
import { Text } from '~/shared/ui/Text';
import CommentaryCardSkeleton from '../CommentaryCardSkeleton/CommentaryCardSkeleton';
import CommentaryCard from '../CommentaryCard/CommentaryCard';
import { Commentary } from '../../model/types/commentary';

const LOADING_COMMENTARY_ITEMS = Array.from({ length: 3 }, (x, i) => i);

type CommentaryListProps = {
  commentaries?: Array<Commentary>;
  isLoading?: boolean;
  title?: string;
} & PropsWithClassName;

const CommentaryList = memo((props: CommentaryListProps) => {
  const { className, title = '', commentaries = [], isLoading = false } = props;

  const { t } = useTranslation();

  return (
    <VStack fullW className={className}>
      <Text title={title || t('commentaries.title', { defaultValue: 'Commentaries' })} />

      {isLoading ? (
        <VStack gap="8" fullW>
          {LOADING_COMMENTARY_ITEMS.map((index) => (
            <CommentaryCardSkeleton key={index} />
          ))}
        </VStack>
      ) : (
        <>
          {commentaries?.length ? (
            <VStack gap="8" fullW>
              {commentaries.map((commentary) => {
                return <CommentaryCard key={commentary.id} commentary={commentary} />;
              })}
            </VStack>
          ) : (
            <Text
              text={t('commentaries.empty', { defaultValue: 'There are no comments here yet.' })}
            />
          )}
        </>
      )}
    </VStack>
  );
});

export default CommentaryList;
