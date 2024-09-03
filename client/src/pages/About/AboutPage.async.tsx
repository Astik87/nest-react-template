import { lazy } from 'react';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const AboutPageAsync = lazy(async () => {
  await delay(2000);
  return import('./AboutPage');
});
