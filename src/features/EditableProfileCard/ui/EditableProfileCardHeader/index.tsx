import ProfileCardHeaderRedesigned from './ProfileCardHeaderRedesigned';
import ProfileCardHeaderDeprecated from './ProfileCardHeaderDeprecated';
import { ToggleFeatures } from '~/entities/User';

type EditableProfileCardHeaderProps = PropsWithClassName;

const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
  return (
    <ToggleFeatures
      feature="redesign"
      on={<ProfileCardHeaderRedesigned {...props} />}
      off={<ProfileCardHeaderDeprecated {...props} />}
    />
  );
};

export default EditableProfileCardHeader;
