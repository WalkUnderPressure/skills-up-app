import generateAsyncComponent from 'shared/lib/helpers/generateAsyncComponent';
import { ProfilePageProps } from '.';

const ProfilePageAsync = generateAsyncComponent<ProfilePageProps>(import('.'));

export default ProfilePageAsync;
