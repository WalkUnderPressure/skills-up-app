import classNames from '~/shared/lib/classNames';
import { TextDataTestIdProps } from '../constants';
import { TextVariant } from '../types';
import cls from './Text.module.scss';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextProps = {
  title?: string;
  text?: string;
  variant?: TextVariant;
  asTitle?: HeadingTags | 'p';
  asText?: 'p' | 'span';
  fullW?: boolean;
} & TextDataTestIdProps &
  PropsWithClassName;

// TODO: Add different sizes for h1, h2, h3 etc.
const Text = (props: TextProps) => {
  const { className, title, text, variant = '', asTitle = 'h1', asText = 'p' } = props;
  const { titleDataTestId, textDataTestId, fullW } = props;

  const TitleEl = asTitle;
  const TextEl = asText;

  return (
    <div className={classNames(cls[variant], { [cls['full-w']]: fullW }, [className])}>
      {title && (
        <TitleEl data-testid={titleDataTestId} className={classNames(cls.title)}>
          {title}
        </TitleEl>
      )}

      {text && (
        <TextEl data-testid={textDataTestId} className={classNames(cls.text)}>
          {text}
        </TextEl>
      )}
    </div>
  );
};

export default Text;
