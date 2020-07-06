import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Route {
    path: string,
    exact?: boolean,
    name: string,
    isInSidebar: boolean,
    icon?: IconProp | any,
    component?: any;
}