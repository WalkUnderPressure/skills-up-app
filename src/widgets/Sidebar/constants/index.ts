type SidebarDataTestIdProps = Partial<{
  switcherDataTestId: string;
  sidebarDataTestId: string;
}>;

const SidebarDataTestIds: Required<SidebarDataTestIdProps> = Object.freeze({
  sidebarDataTestId: 'SidebarDataTestId',
  switcherDataTestId: 'SidebarSwitcherDataTestId',
});

export { SidebarDataTestIds };
export type { SidebarDataTestIdProps };
