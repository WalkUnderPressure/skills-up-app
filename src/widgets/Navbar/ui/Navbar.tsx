import NavbarRedesigned from '~/widgets/Navbar/ui/NavbarRedesigned';
import NavbarDeprecated from '~/widgets/Navbar/ui/NavbarDeprecated';
import { ToggleFeatures } from '~/entities/User';

type NavbarProps = PropsWithClassName;

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <ToggleFeatures
      feature="redesign"
      on={<NavbarRedesigned className={className} />}
      off={<NavbarDeprecated className={className} />}
    />
  );
};

export default Navbar;
