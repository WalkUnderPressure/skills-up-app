import { ComponentType, lazy } from 'react'

const PAGE_LOAD_DELAY = 1000

export const asyncPageGenerator = (factory: Promise<{ default: ComponentType<any> }>) => {
    // Use for production
    // return lazy(() => factory);

    // Use only in development
    return lazy<ComponentType>(() => new Promise((resolve) => {
        setTimeout(() => resolve(factory), PAGE_LOAD_DELAY)
    }));
}

export default asyncPageGenerator
