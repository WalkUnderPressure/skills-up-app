import { render, screen } from '@testing-library/react';

import { ButtonTheme } from '../types';
import Button from '../ui/Button';

describe('Button', () => {
  test('Test that Button render successfully', () => {
    const btnText = 'Click here';

    render(<Button>{btnText}</Button>);

    expect(screen.getByText(btnText)).toBeInTheDocument();
    // screen.debug();
  });

  test('Test that Button has default class', () => {
    const btnText = 'Click here';

    render(<Button>{btnText}</Button>);

    expect(screen.getByText(btnText)).toHaveClass('button');
    // screen.debug();
  });

  test('Test that Button has default theme class', () => {
    const btnText = 'Click here';

    render(<Button theme={ButtonTheme.CLEAR}>{btnText}</Button>);

    expect(screen.getByText(btnText)).toHaveClass(ButtonTheme.CLEAR);
    // screen.debug();
  });
});
