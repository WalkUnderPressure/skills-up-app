import classNames from 'shared/lib/classNames';
import * as cls from './Text.module.scss';
import { TextTheme } from '../types';

type TextProps = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
};

const Text = (props: TextProps) => {
  const { className, title, text, theme = TextTheme.NONE } = props;

  return (
    <div className={classNames(cls[theme], {}, [className])}>
      {title && <p className={classNames(cls.title)}>{title}</p>}
      {text && <p className={classNames(cls.text)}>{text}</p>}
    </div>
  );
};

export default Text;
