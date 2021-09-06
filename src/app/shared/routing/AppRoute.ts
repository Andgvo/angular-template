export class AppRoute {
    name: string;
    path: string;
    previous?: AppRoute[];

    constructor(name: string, path: string, previousRoute?: AppRoute){        
        this.name = name ?? '';
        if(previousRoute !== undefined ){
            this.path = previousRoute?.path + '/' + path;
            this.previous = previousRoute.previous?.map( rute => {
                return { name: rute.name, path: rute.path } as AppRoute;
            }).concat( previousRoute );
        }else{
            this.path = path;
            this.previous = [];
        }
    }
}