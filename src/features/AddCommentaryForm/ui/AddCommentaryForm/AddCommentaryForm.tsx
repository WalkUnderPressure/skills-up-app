import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import {
  Button as ButtonDeprecated,
  ButtonRounded,
  ButtonTheme,
} from '~/shared/ui/deprecated/Button';
import { Button } from '~/shared/ui/redesigned/Button';
import classNames from '~/shared/lib/classNames';
import { Input as InputDeprecated } from '~/shared/ui/deprecated/Input';
import { Input as InputRedesigned } from '~/shared/ui/redesigned/Input';
import {
  useAddCommentaryActions,
  addCommentaryReducer,
} from '../../model/slices/addCommentarySlice';
import {
  useAddCommentaryIsLoading,
  useAddCommentaryText,
} from '../../model/selectors/addCommentarySelectors';
import cls from './AddCommentaryForm.module.scss';
import { HStack } from '~/shared/ui/redesigned/Stack';
import { AddCommentaryFormDataTestIds } from '~/features/AddCommentaryForm/constants';
import { ToggleFeatures, useToggleFeatures } from '~/entities/User';

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

  const { Input, formCls } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Input: InputRedesigned,
      formCls: cls['add-commentary-form-redesigned'],
    }),
    off: () => ({
      Input: InputDeprecated,
      formCls: cls['add-commentary-form'],
    }),
  });

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
        className={classNames(formCls, {}, [className])}
        data-testid={AddCommentaryFormDataTestIds.Form}
      >
        <Input
          name="commentary"
          onChange={onChangeCommentaryText}
          value={text}
          disabled={isLoading}
          placeholder={t('post.add-commentary', {
            defaultValue: 'Add commentary',
            ns: 'pages.blog',
          })}
          data-testid={AddCommentaryFormDataTestIds.Input}
        />

        <ToggleFeatures
          feature="redesign"
          on={
            <Button
              variant="fill"
              onClick={onSend}
              data-testid={AddCommentaryFormDataTestIds.Button}
            >
              {t('form.send', { defaultValue: 'Send' })}
            </Button>
          }
          off={
            <ButtonDeprecated
              rounded={ButtonRounded.M}
              theme={ButtonTheme.BG}
              onClick={onSend}
              data-testid={AddCommentaryFormDataTestIds.Button}
            >
              {t('form.send', { defaultValue: 'Send' })}
            </ButtonDeprecated>
          }
        />
      </HStack>
    </DynamicReducerProvider>
  );
});

export default AddCommentaryForm;
