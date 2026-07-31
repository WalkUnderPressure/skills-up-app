import { useParams } from 'react-router-dom';

import { ProfilePageDataTestId } from '~/pages/ProfilePage/constants';
import { EditableProfileCard } from '~/features/EditableProfileCard';
import { useUserId } from '~/entities/User';
import { Page } from '~/widgets/Page';

const ProfilePage = () => {
  const { id: userId } = useParams();
  const authUserId = useUserId();

  return (
    <Page data-testid={ProfilePageDataTestId}>
      <EditableProfileCard profileUserId={userId || authUserId || ''} />
    </Page>
  );
};

export default ProfilePage;
