import { Card } from "@shared/modules/ui-cards/models/card";
import { AppRoute } from "./AppRoute";

export const ROUTE_MAIN_APP = new AppRoute('Home', 'home', undefined, 'app');
export const ROUTE_MAIN_SEDE = new AppRoute('Sede', 'gestionar', ROUTE_MAIN_APP, 'sede');
export const ROUTE_SEDE_REGISTRAR = new AppRoute('Registrar sede', 'registrar', ROUTE_MAIN_SEDE);
export const ROUTE_SEDE_EDITAR = new AppRoute('Registrar sede', 'editar', ROUTE_MAIN_SEDE);
export const ROUTE_MAIN_EDIFICIO = new AppRoute('Edificio', 'gestionar', ROUTE_MAIN_SEDE, 'edificio');
export const ROUTE_MAIN_AULA = new AppRoute('Aula', 'gestionar', ROUTE_MAIN_EDIFICIO, 'aula');
export const ROUTE_AULA_REGISTRAR = new AppRoute('Registrar aula', 'registrar', ROUTE_MAIN_AULA);


export const ROUTE_APP = new AppRoute('Home', 'home', undefined, 'app/template');
export const ROUTE_BREADCRUMB = new AppRoute('Breadcrumb', 'breadcrumb', ROUTE_APP);
export const ROUTE_BUTTONS = new AppRoute('Buttons', 'buttons', ROUTE_APP);
export const ROUTE_CUSTOM_THEME = new AppRoute('Custon theme', 'style', ROUTE_APP);
export const ROUTE_DYNAMIC_FORM = new AppRoute('Dynamic Form', 'form', ROUTE_APP);
export const ROUTE_LEVEL_2 = new AppRoute('Level 2', 'level-2', ROUTE_BUTTONS);
export const ROUTE_LEVEL_3 = new AppRoute('Level 3', 'level-3', ROUTE_LEVEL_2);

/**
 * Only for cards modules
 */
const CARD_HOME = new Card(ROUTE_APP, undefined, 'home');
const CARD_BREADCRUMB = new Card(ROUTE_BREADCRUMB, 'Show buttons description', 'timeline');
const CARD_BUTTONS = new Card(ROUTE_BUTTONS, 'Show buttons description', 'dialpad');
const CARD_CUSTOM_THEME = new Card(ROUTE_CUSTOM_THEME, 'Show buttons description', 'colorize');
const CARD_DYNAMIC_FORM = new Card(ROUTE_DYNAMIC_FORM, 'Show buttons description', 'dynamic_feed');
export const CARDS_HOME = [CARD_HOME, CARD_BREADCRUMB, CARD_BUTTONS, CARD_CUSTOM_THEME, CARD_DYNAMIC_FORM ];