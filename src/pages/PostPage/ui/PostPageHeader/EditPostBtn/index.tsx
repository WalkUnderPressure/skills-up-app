import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useIsUserCanEditPost } from '../../../model/selectors/postSelectors';
import { Button, ButtonRounded, ButtonSize, ButtonTheme } from '~/shared/ui/Button';
import { getRoutePostEdit } from '~/shared/constants/appRoutes';
import { usePostDetails } from '~/entities/Post';
import classNames from '~/shared/lib/classNames';
import cls from './EditPostBtn.module.scss';

import EditIcon from '~/shared/assets/icons/edit.svg';

type EditPostBtnProps = PropsWithClassName;

const EditPostBtn = (props: EditPostBtnProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const isUserCanEditPost = useIsUserCanEditPost();
  const postData = usePostDetails();

  const onEditClick = useCallback(() => {
    let postEditUrl = '';

    if (postData?.id) {
      postEditUrl = getRoutePostEdit(postData.id);
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

          {t('form.edit', { defaultValue: 'Edit' })}
        </Button>
      )}
    </>
  );
};

export default EditPostBtn;
