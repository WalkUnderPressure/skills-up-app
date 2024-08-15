import generateAsyncComponent from 'shared/lib/helpers/generateAsyncComponent';
import { ProfilePageProps } from './ProfilePage';

const ProfilePageAsync = generateAsyncComponent<ProfilePageProps>(import('./ProfilePage'));

export default ProfilePageAsync;
