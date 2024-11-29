import { useParams } from 'react-router-dom';

import { EditableProfileCard } from 'features/EditableProfileCard';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserId } from 'entities/User';
import { Page } from 'widgets/Page';

const ProfilePage = () => {
  const { id: userId } = useParams();
  const authUserId = useAppSelector(getUserId);

  return (
    <Page>
      <EditableProfileCard profileUserId={userId || authUserId || ''} />
    </Page>
  );
};

export default ProfilePage;
