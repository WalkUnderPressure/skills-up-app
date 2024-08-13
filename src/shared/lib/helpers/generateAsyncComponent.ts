import { ComponentType, lazy } from 'react';

const PAGE_LOAD_DELAY = 1500;

export function generateAsyncComponent<T>(factory: Promise<{ default: ComponentType<T> }>) {
  return lazy<ComponentType<T>>(() => {
    // Use for production
    let result = factory;

    // Use only in development
    if (__IS_DEV__) {
      result = new Promise((resolve) => {
        setTimeout(() => resolve(factory), PAGE_LOAD_DELAY);
      });
    }

    return result;
  });
}

export default generateAsyncComponent;
