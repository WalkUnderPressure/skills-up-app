import { memo, useCallback } from 'react';

import { Button, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import * as cls from './Code.module.scss';

import CopyIcon from 'shared/assets/icons/copy.svg';

type CodeProps = {
  text: string;
} & PropsWithClassName;

const COPY_ICON_SIZE = 24;

const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div style={{ position: 'relative' }} className={cls.box}>
      <Button onClick={onCopy} className={cls['copy-btn']} theme={ButtonTheme.CLEAR}>
        <CopyIcon width={COPY_ICON_SIZE} height={COPY_ICON_SIZE} className={cls['copy-icon']} />
      </Button>

      <pre className={classNames(cls.code, {}, [className])}>
        <code>{text}</code>
      </pre>
    </div>
  );
});

export default Code;
