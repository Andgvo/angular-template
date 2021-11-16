import { Card } from "@shared/modules/ui-cards/models/card";
import { AppRoute } from "./AppRoute";

export const ROUTE_APP = new AppRoute('Home', 'home', 'home', undefined, 'app');
export const ROUTE_BREADCRUMB = new AppRoute('Breadcrumb', 'timeline', 'breadcrumb', ROUTE_APP, 'template');
export const ROUTE_BUTTONS = new AppRoute('Buttons', 'dialpad', 'buttons', ROUTE_APP, 'template');
export const ROUTE_CUSTOM_THEME = new AppRoute('Custon theme', 'colorize', 'style', ROUTE_APP, 'template');
export const ROUTE_DYNAMIC_FORM = new AppRoute('Dynamic Form', 'dynamic_feed', 'form', ROUTE_APP, 'template');
export const ROUTE_TABLE = new AppRoute('Table', 'table_view' , 'table', ROUTE_APP, 'template');

export const CARDS_HOME = Card.mapToCard([
    { appRoute: ROUTE_APP, description: 'Home'},
    { appRoute: ROUTE_CUSTOM_THEME, description: 'Define de colors theme and typography'},
    { appRoute: ROUTE_BREADCRUMB, description: 'Componet with breadcrum and current page title'},
    { appRoute: ROUTE_BUTTONS, description: 'Default and extra custom colored buttons'},
    { appRoute: ROUTE_DYNAMIC_FORM, description: 'Component to do dynamic forms easy way'},
    { appRoute: ROUTE_TABLE, description: 'Example table with dynamic rows and colums'},
]);
//export const CARDS_HOME = [CARD_HOME, CARD_BREADCRUMB, CARD_BUTTONS, CARD_CUSTOM_THEME, CARD_DYNAMIC_FORM ];