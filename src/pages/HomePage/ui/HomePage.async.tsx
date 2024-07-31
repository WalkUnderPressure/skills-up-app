import asyncPageGenerator from '../../lib/asyncPageGenerator';

const HomePageAsync = asyncPageGenerator(import('./HomePage'));

export default HomePageAsync;
