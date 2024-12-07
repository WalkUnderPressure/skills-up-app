import React, { PropsWithChildren } from 'react';

const ComponentBackground = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div
      style={{
        padding: '32px',
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgb(93 109 119)',
      }}
    >
      {children}
    </div>
  );
};

export default ComponentBackground;
