// Alternative ways to lazy load page
// import { ComponentType, lazy } from 'react'
// const AboutPageAsync = lazy(() => import('./AboutPage'));
// const AboutPageAsync = lazy<ComponentType>(() => new Promise((resolve) => (
//     setTimeout(() => resolve(import('./AboutPage')), 2000)
// )));

import generateAsyncComponent from 'shared/lib/helpers/generateAsyncComponent';
import { AboutPageProps } from './AboutPage';

const AboutPageAsync = generateAsyncComponent<AboutPageProps>(import('./AboutPage'));

export default AboutPageAsync;
