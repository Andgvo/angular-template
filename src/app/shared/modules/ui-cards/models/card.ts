import { AppRoute } from "@shared/routing/AppRoute";

export interface RouteCard{
    appRoute: AppRoute;
    description?: string;
    color?: string;
}
export class Card {
    name: string;
    icon?: string;
    description: string;
    url: string;
    color: string;

    constructor(appRoute: AppRoute, description?: string, color?: string  ) {
        this.name = appRoute.name;
        this.icon = appRoute.icon;
        this.description = description ?? '';
        this.url = appRoute.fullPath;
        this.color = color ?? '';
    }

    public static mapToCard(routeCards: RouteCard[]): Card[]{
        return routeCards.map( route => new Card(route.appRoute, route.description, route.color) );
    }
}