import classNames from 'shared/lib/classNames';
import * as cls from './PostEditPage.module.scss';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';

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
        <div className={classNames(cls['post-edit-page'], {}, [className])}>
          <Text
            theme={TextTheme.WARN}
            title={
              `${isEditMode ? `Edit post with id: [${postId}]` : 'Create new post'}` +
              ' functionality will be added in the future!'
            }
          />
        </div>
      </Page>
    </>
  );
};

export default PostEditPage;
