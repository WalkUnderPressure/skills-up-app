import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { Button, ButtonRounded, ButtonTheme } from '~/shared/ui/Button';
import classNames from '~/shared/lib/classNames';
import { Input } from '~/shared/ui/Input';
import {
  useAddCommentaryActions,
  addCommentaryReducer,
} from '../../model/slices/addCommentarySlice';
import {
  useAddCommentaryIsLoading,
  useAddCommentaryText,
} from '../../model/selectors/addCommentarySelectors';
import cls from './AddCommentaryForm.module.scss';
import { HStack } from '~/shared/ui/Stack';

const reducers: ReducersMap = {
  addCommentaryForm: addCommentaryReducer,
};

export type AddCommentaryFormProps = {
  onSendCommentary: (text: string) => void;
} & PropsWithClassName;

const AddCommentaryForm = memo((props: AddCommentaryFormProps) => {
  const { className, onSendCommentary } = props;

  const { t } = useTranslation();

  const isLoading = useAddCommentaryIsLoading();
  const text = useAddCommentaryText();

  const { updateText } = useAddCommentaryActions();

  const onChangeCommentaryText = useCallback(
    (newText: string) => {
      updateText(newText);
    },
    [updateText],
  );

  const onSend = useCallback(() => {
    onSendCommentary(text);
    onChangeCommentaryText('');
  }, [onChangeCommentaryText, onSendCommentary, text]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <HStack
        align="center"
        justify="between"
        gap="24"
        fullW
        className={classNames(cls['add-commentary-form'], {}, [className])}
      >
        <Input
          name="commentary"
          onChange={onChangeCommentaryText}
          value={text}
          disabled={isLoading}
        />

        <Button rounded={ButtonRounded.M} theme={ButtonTheme.BG} onClick={onSend}>
          {t('form.send', { defaultValue: 'Send' })}
        </Button>
      </HStack>
    </DynamicReducerProvider>
  );
});

export default AddCommentaryForm;
