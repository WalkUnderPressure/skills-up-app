import generateAsyncComponent from '~/shared/lib/helpers/generateAsyncComponent';
import { AboutPageProps } from './AboutPage';

const AboutPageAsync = generateAsyncComponent<AboutPageProps>(import('./AboutPage'));

export default AboutPageAsync;
