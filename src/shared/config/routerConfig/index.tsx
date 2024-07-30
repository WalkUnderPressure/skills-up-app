import { RouteProps } from "react-router-dom"

import { AboutPage } from "pages/AboutPage"
import { HomePage } from "pages/HomePage"

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RouterPaths[AppRoutes.HOME],
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPaths[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
}
