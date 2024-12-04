import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getIsUserCanEditPost } from '~/pages/PostPage/model/selectors/postSelectors';
import { Button, ButtonRounded, ButtonSize, ButtonTheme } from '~/shared/ui/Button';
import { AppRoutes, RouterPaths } from '~/shared/config/routerConfig';
import { useAppSelector } from '~/app/providers/StoreProvider';
import { getPostDetails } from '~/entities/Post';
import classNames from '~/shared/lib/classNames';
import * as cls from './EditPostBtn.module.scss';

import EditIcon from '~/shared/assets/icons/edit.svg';

type EditPostBtnProps = PropsWithClassName;

const EditPostBtn = (props: EditPostBtnProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const isUserCanEditPost = useAppSelector(getIsUserCanEditPost);
  const postData = useAppSelector(getPostDetails);

  const onEditClick = useCallback(() => {
    let postEditUrl = '';

    if (postData?.id) {
      postEditUrl = `${RouterPaths[AppRoutes.POST_EDIT].replace(':id', postData.id)}`;
    }

    if (postEditUrl) {
      navigate(postEditUrl);
    }
  }, [navigate, postData?.id]);

  return (
    <>
      {isUserCanEditPost && (
        <Button
          theme={ButtonTheme.BG_INVERTED}
          rounded={ButtonRounded.L}
          size={ButtonSize.L}
          className={classNames(cls['edit'], {}, [className])}
          onClick={onEditClick}
        >
          <EditIcon />

          {t('edit', { defaultValue: 'Edit' })}
        </Button>
      )}
    </>
  );
};

export default EditPostBtn;
