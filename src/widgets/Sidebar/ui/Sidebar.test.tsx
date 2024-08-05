import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from 'shared/config/tests/providers/renderWithProviders';
import Sidebar from 'widgets/Sidebar/ui/Sidebar';

describe('Sidebar', () => {
  test('Test that Sidebar render successfully', () => {
    const sidebarTestId = 'SidebarTestId';

    renderWithProviders(<Sidebar dataTestId={sidebarTestId} />);

    expect(screen.getByTestId(sidebarTestId)).toBeInTheDocument();
    // screen.debug();
  });

  test('Test that Sidebar close successfully', () => {
    const sidebarTestId = 'SidebarTestId';

    renderWithProviders(<Sidebar dataTestId={sidebarTestId} />);
    expect(screen.getByTestId(sidebarTestId)).toBeInTheDocument();

    const switcherBtn = screen.getByTestId(Sidebar.switcherDataTestId);
    fireEvent.click(switcherBtn);

    expect(screen.getByTestId(sidebarTestId)).toHaveClass('collapsed');
    // screen.debug();
  });

  test('Test that Sidebar close and then open successfully', () => {
    const sidebarTestId = 'SidebarTestId';

    renderWithProviders(<Sidebar dataTestId={sidebarTestId} />);
    expect(screen.getByTestId(sidebarTestId)).toBeInTheDocument();

    const switcherBtn = screen.getByTestId(Sidebar.switcherDataTestId);

    // Check Sidebar closing
    fireEvent.click(switcherBtn);
    expect(screen.getByTestId(sidebarTestId)).toHaveClass('collapsed');

    // Check Sidebar open after closing
    fireEvent.click(switcherBtn);
    expect(screen.getByTestId(sidebarTestId)).not.toHaveClass('collapsed');

    // screen.debug();
  });
});
