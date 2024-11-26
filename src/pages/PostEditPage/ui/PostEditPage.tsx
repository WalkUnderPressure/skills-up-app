import { useParams } from 'react-router-dom';

import { Text, TextTheme } from 'shared/ui/Text';
import classNames from 'shared/lib/classNames';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';

export type PostEditPageProps = {
  className?: string;
};

const PostEditPage = (props: PostEditPageProps) => {
  const { className } = props;

  const { id: postId } = useParams<{ id: string }>();
  const isEditMode = Boolean(postId);

  return (
    <>
      <Page>
        <HStack className={classNames('', {}, [className])}>
          <Text
            theme={TextTheme.WARN}
            title={
              `${isEditMode ? `Edit post with id: [${postId}]` : 'Create new post'}` +
              ' functionality will be added in the future!'
            }
          />
        </HStack>
      </Page>
    </>
  );
};

export default PostEditPage;
