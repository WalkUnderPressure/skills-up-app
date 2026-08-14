import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button as ButtonDeprecated,
  ButtonRounded,
  ButtonTheme,
} from '~/shared/ui/deprecated/Button';
import { DesktopView, MobileView } from '~/shared/ui/redesigned/DevicesViews';
import { StarRating } from '~/shared/ui/deprecated/StarRating';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';
import { Card as CardDeprecated } from '~/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '~/shared/ui/redesigned/Card';
import { Text as TextDeprecated } from '~/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '~/shared/ui/redesigned/Text';
import { Input as InputDeprecated } from '~/shared/ui/deprecated/Input';
import { Input as InputRedesigned } from '~/shared/ui/redesigned/Input';
import { Modal as ModalDeprecated } from '~/shared/ui/deprecated/Modal';
import { Modal as ModalRedesigned, useModalState } from '~/shared/ui/redesigned/Modal';
import { Drawer } from '~/shared/ui/deprecated/Drawer';
import cls from './RatingCard.module.scss';
import { ToggleFeatures, useToggleFeatures } from '~/entities/FeatureFlags';
import { Button } from '~/shared/ui/redesigned/Button';

type RatingCardProps = {
  title: string;
  feedbackTitle?: string;
  rating?: number;
  onCancel?: (rating: number) => void;
  onAccept?: (rating: number, feedback: string) => void;
  dataTestIds?: {
    SubmitBtn: string;
    CancelBtn: string;
  };
} & PropsWithClassName;

const RatingCard = memo((props: RatingCardProps) => {
  const { className, title, feedbackTitle, rating = 0, onAccept, onCancel, dataTestIds } = props;

  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModalState();

  const [selectedRating, setSelectedRating] = useState(rating);
  const [feedback, setFeedback] = useState('');

  const isNeedShowFeedbackModal = Boolean(feedbackTitle);

  const { Card, Text, Input, Modal } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Card: CardRedesigned,
      Text: TextRedesigned,
      Input: InputRedesigned,
      Modal: ModalRedesigned,
    }),
    off: () => ({
      Card: CardDeprecated,
      Text: TextDeprecated,
      Input: InputDeprecated,
      Modal: ModalDeprecated,
    }),
  });

  const onSelectStars = (newRating: number) => {
    setSelectedRating(newRating);

    if (isNeedShowFeedbackModal) {
      openModal();
    } else if (onCancel) {
      onCancel(newRating);
    }
  };

  const saveHandler = () => {
    closeModal();

    if (onAccept && selectedRating) {
      onAccept(selectedRating, feedback);
    }
  };

  const cancelHandler = () => {
    closeModal();

    if (onCancel && selectedRating) {
      onCancel(selectedRating);
    }
  };

  const formContent = (
    <>
      <Text text={feedbackTitle} asText="p" />

      <Input name="feedback" autoFocus={true} value={feedback} onChange={setFeedback} />

      <HStack fullW gap="24" align="center" justify="end">
        <ToggleFeatures
          feature="redesign"
          on={
            <>
              <Button variant="fill" onClick={saveHandler} data-testid={dataTestIds?.SubmitBtn}>
                {t('actions.send', { defaultValue: 'Send' })}
              </Button>

              <Button variant="fill" onClick={cancelHandler} data-testid={dataTestIds?.CancelBtn}>
                {t('actions.cancel', { defaultValue: 'Cancel' })}
              </Button>
            </>
          }
          off={
            <>
              <ButtonDeprecated
                rounded={ButtonRounded.M}
                theme={ButtonTheme.BG_INVERTED}
                onClick={saveHandler}
                data-testid={dataTestIds?.SubmitBtn}
              >
                {t('actions.send', { defaultValue: 'Send' })}
              </ButtonDeprecated>

              <ButtonDeprecated
                rounded={ButtonRounded.M}
                theme={ButtonTheme.OUTLINE}
                onClick={cancelHandler}
                data-testid={dataTestIds?.CancelBtn}
              >
                {t('actions.cancel', { defaultValue: 'Cancel' })}
              </ButtonDeprecated>
            </>
          }
        />
      </HStack>
    </>
  );

  return (
    <>
      <Card className={classNames(cls.rating, {}, [className])}>
        <VStack align="center" gap="16">
          <Text text={title} asText="p" />

          <StarRating rating={rating} onSelect={onSelectStars} />
        </VStack>
      </Card>

      <MobileView>
        <Drawer isOpen={isOpen} onClose={cancelHandler}>
          <VStack gap="24" fullW fullH align="center" justify="start">
            {formContent}
          </VStack>
        </Drawer>
      </MobileView>

      <DesktopView additional={['tablet']}>
        <Modal isOpen={isOpen} onClose={cancelHandler}>
          <VStack gap="24" fullW fullH align="center" justify="between">
            {formContent}
          </VStack>
        </Modal>
      </DesktopView>
    </>
  );
});

export default RatingCard;
