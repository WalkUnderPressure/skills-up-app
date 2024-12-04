import generateAsyncComponent from '~/shared/lib/helpers/generateAsyncComponent';
import { HomePageProps } from './HomePage';

const HomePageAsync = generateAsyncComponent<HomePageProps>(import('./HomePage'));

export default HomePageAsync;
