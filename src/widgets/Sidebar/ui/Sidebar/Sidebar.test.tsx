import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '~/shared/config/tests/providers/renderWithProviders';
import { SidebarDataTestIds } from './Sidebar.test-ids';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('Test that Sidebar render successfully', () => {
    renderWithProviders(<Sidebar {...SidebarDataTestIds} />);

    expect(screen.getByTestId(SidebarDataTestIds.sidebarDataTestId)).toBeInTheDocument();
    // screen.debug();
  });

  test('Test that Sidebar close successfully', () => {
    renderWithProviders(<Sidebar {...SidebarDataTestIds} />);
    expect(screen.getByTestId(SidebarDataTestIds.sidebarDataTestId)).toBeInTheDocument();

    const switcherBtn = screen.getByTestId(SidebarDataTestIds.switcherDataTestId);
    fireEvent.click(switcherBtn);

    expect(screen.getByTestId(SidebarDataTestIds.sidebarDataTestId)).toHaveClass('collapsed');
    // screen.debug();
  });

  test('Test that Sidebar close and then open successfully', () => {
    renderWithProviders(<Sidebar {...SidebarDataTestIds} />);
    expect(screen.getByTestId(SidebarDataTestIds.sidebarDataTestId)).toBeInTheDocument();

    const switcherBtn = screen.getByTestId(SidebarDataTestIds.switcherDataTestId);

    // Check Sidebar closing
    fireEvent.click(switcherBtn);
    expect(screen.getByTestId(SidebarDataTestIds.sidebarDataTestId)).toHaveClass('collapsed');

    // Check Sidebar open after closing
    fireEvent.click(switcherBtn);
    expect(screen.getByTestId(SidebarDataTestIds.sidebarDataTestId)).not.toHaveClass('collapsed');

    // screen.debug();
  });
});
