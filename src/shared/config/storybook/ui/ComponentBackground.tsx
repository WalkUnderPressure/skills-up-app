import { CSSProperties, PropsWithChildren } from 'react';

type ComponentBackgroundProps = {
  style?: CSSProperties;
} & PropsWithChildren;

const ComponentBackground = (props: ComponentBackgroundProps) => {
  const { children, style } = props;

  return (
    <div
      style={{
        padding: '32px',
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgb(93 109 119)',
        borderRadius: '12px',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ComponentBackground;
