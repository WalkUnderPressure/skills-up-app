import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { Button, ButtonRounded, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { addCommentaryActions, addCommentaryReducer } from '../../model/slice/addCommentarySlice';
import {
  getAddCommentaryIsLoading,
  getAddCommentaryText,
} from '../../model/selectors/addCommentarySelectors';
import * as cls from './AddCommentaryForm.module.scss';

const reducers: ReducersMap = {
  addCommentaryForm: addCommentaryReducer,
};

export type AddCommentaryFormProps = {
  className?: string;
  onSendCommentary: (text: string) => void;
};

const AddCommentaryForm = memo((props: AddCommentaryFormProps) => {
  const { className, onSendCommentary } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isLoading = useAppSelector(getAddCommentaryIsLoading);
  const text = useAppSelector(getAddCommentaryText);

  const onChangeCommentaryText = useCallback(
    (newText: string) => {
      dispatch(addCommentaryActions.updateText(newText));
    },
    [dispatch],
  );

  const onSend = useCallback(() => {
    onSendCommentary(text);
    onChangeCommentaryText('');
  }, [onChangeCommentaryText, onSendCommentary, text]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <div className={classNames(cls['add-commentary-form'], {}, [className])}>
        <Input
          name="commentary"
          onChange={onChangeCommentaryText}
          value={text}
          disabled={isLoading}
        />

        <Button rounded={ButtonRounded.M} theme={ButtonTheme.BG} onClick={onSend}>
          {t('form.send', { defaultValue: 'Send' })}
        </Button>
      </div>
    </DynamicReducerProvider>
  );
});

export default AddCommentaryForm;
