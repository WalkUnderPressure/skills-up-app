// Alternative ways to lazy load page
// import { ComponentType, lazy } from 'react'
// const AboutPageAsync = lazy(() => import('./AboutPage'));
// const AboutPageAsync = lazy<ComponentType>(() => new Promise((resolve) => (
//     setTimeout(() => resolve(import('./AboutPage')), 2000)
// )));

import { asyncPageGenerator } from '../../lib/asyncPageGenerator';

const AboutPageAsync = asyncPageGenerator(import('./AboutPage'));

export default AboutPageAsync;
