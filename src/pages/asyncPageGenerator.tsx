import { ComponentType, lazy } from 'react'

export const asyncPageGenerator = (factory: Promise<{ default: ComponentType<any> }>) => {
    // Use for production
    // return lazy(() => factory);

    // Use only in development
    return lazy<ComponentType>(() => new Promise((resolve) => {
        setTimeout(() => resolve(factory), 2000)
    }));
}

export default asyncPageGenerator
