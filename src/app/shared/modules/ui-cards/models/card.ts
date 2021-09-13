import { AppRoute } from "@shared/routing/AppRoute";

export class Card {
    name: string;
    icon?: string;
    description: string;
    url: string;
    color: string;

    constructor(appRoute: AppRoute, description?: string, icon?: string, color?: string  ) {
        this.name = appRoute.name;
        this.icon = icon;
        this.description = description ?? '';
        this.url = appRoute.fullPath;
        this.color = color ?? '';
    }
}