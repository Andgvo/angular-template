export class AppRoute {
    name: string;
    path: string;
    fullPath: string;
    module?: string;
    fullModule: string;
    previous?: AppRoute[];

    constructor(name: string, path: string, previousRoute?: AppRoute, module?: string) {
        this.name = name;
        this.path = path;
        this.fullModule = module ?? '';
        if (previousRoute !== undefined && module === undefined) { // Case node
            this.fullModule = previousRoute?.fullModule;
            this.fullPath = previousRoute?.fullModule + '/' + path;
            this.previous = previousRoute.previous?.concat(previousRoute);
        } else if (previousRoute !== undefined && module !== undefined) { //Case Main Module
            this.module = module;
            this.fullModule = previousRoute?.fullModule + '/' + module;
            this.fullPath = previousRoute?.fullModule + '/' + module + '/' + path;
            this.previous = previousRoute.previous?.concat(previousRoute);
        } else { // Case Root
            this.fullPath = this.fullModule;
            this.previous = [];
        }
    }
}