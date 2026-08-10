import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonTheme } from '~/shared/ui/deprecated/Button';
import { DesktopView, MobileView } from '~/shared/ui/deprecated/DevicesViews';
import { Modal, useModalState } from '~/shared/ui/deprecated/Modal';
import { StarRating } from '~/shared/ui/deprecated/StarRating';
import { HStack, VStack } from '~/shared/ui/deprecated/Stack';
import classNames from '~/shared/lib/classNames';
import { Input } from '~/shared/ui/deprecated/Input';
import { Card } from '~/shared/ui/deprecated/Card';
import { Text } from '~/shared/ui/deprecated/Text';
import { Drawer } from '~/shared/ui/deprecated/Drawer';
import cls from './RatingCard.module.scss';

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
        <Button
          rounded={ButtonRounded.M}
          theme={ButtonTheme.BG_INVERTED}
          onClick={saveHandler}
          data-testid={dataTestIds?.SubmitBtn}
        >
          {t('actions.send', { defaultValue: 'Send' })}
        </Button>

        <Button
          rounded={ButtonRounded.M}
          theme={ButtonTheme.OUTLINE}
          onClick={cancelHandler}
          data-testid={dataTestIds?.CancelBtn}
        >
          {t('actions.cancel', { defaultValue: 'Cancel' })}
        </Button>
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
