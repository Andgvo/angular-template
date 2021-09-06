import { AppRoute } from "./AppRoute";

const ROUTE_APP = new AppRoute('Home', 'app');
export const ROUTE_HOME = new AppRoute('Home', 'app/home');
export const ROUTE_BREADCRUMB = new AppRoute('Breadcrumb', 'template/breadcrumb', ROUTE_APP);
export const ROUTE_BUTTONS = new AppRoute('Buttons', 'template/buttons', ROUTE_APP);
export const ROUTE_CUSTOM_THEME = new AppRoute('Custon theme', 'template/style', ROUTE_APP);
export const ROUTE_DYNAMIC_FORM = new AppRoute('Dynamic Form', 'template/form', ROUTE_APP);
export const ROUTE_LEVEL_2 = new AppRoute('Level 2', 'level-2', ROUTE_BUTTONS);
export const ROUTE_LEVEL_3 = new AppRoute('Level 3', 'level-3', ROUTE_LEVEL_2);

export const CARDS_HOME = [ ROUTE_BREADCRUMB, ROUTE_BUTTONS, ROUTE_CUSTOM_THEME, ROUTE_DYNAMIC_FORM ];