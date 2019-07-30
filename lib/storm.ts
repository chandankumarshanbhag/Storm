import http from "http";
import url from "url";
import { Route } from "./index"
import defaultConfig from "./default.config"
import getRawBody from 'raw-body'

interface RouteCollection {
    path: string,
    $class: any,
    pathsplit: string[]
}
class Storm {
    $definedRoutes: RouteCollection[]
    $indexRoute: Object
    $routes: any
    $server: any
    $port: any

    constructor() {
        this.$definedRoutes = []
        this.createServer = this.createServer.bind(this)
        this.start = this.start.bind(this)
        this.handleRoutes = this.handleRoutes.bind(this)
        this.useRoute = this.useRoute.bind(this)
        this.resolveRoute = this.resolveRoute.bind(this)
        this.initRoutes = this.initRoutes.bind(this)

        this.unhandledRequest = this.unhandledRequest.bind(this);
    }

    unhandledRequest(){
        //Override this method
    }



    useRoute(req, res, RouteClass) {
        let routeHandler = new RouteClass();
        routeHandler.initRoute(req,res);
        routeHandler.handle();
    }

    resolveRoute(path):Route {
        let exactpathroute = this.$definedRoutes.reduce((acc, _r) => {
            if (path == _r.path) {
                return _r.$class
            }
            return acc;
        }, null);
        if (exactpathroute) {
            return exactpathroute;
        }
        else {
            let definedroutes = this.$definedRoutes.sort((x, y) => x.pathsplit.length > y.pathsplit.length ? 0 : 1);
            let pathsplit = path.split(/\//g).filter(x => x == "" ? false : true).map(x => x.toLowerCase());
            let matchrate = [];
            definedroutes.forEach((_r, key) => {
                matchrate[key] = pathsplit.reduce((acc, x, ind) => {
                    if (_r.pathsplit[ind] != undefined && _r.pathsplit[ind] == x) {
                        acc++;
                    }
                    return acc;
                }, 0)
            });
            let matchresult = matchrate.reduce((acc, x, ind) => {
                return x > acc.max ? { ind, max: x } : acc;
            }, { ind: undefined, max: 0 });
            if (matchresult.ind != undefined && matchresult.max > 0) {
                return this.$definedRoutes[matchresult.ind].$class
            }
            else{
                this.unhandledRequest();
                return null;
            }
        }
    }
    initRoutes() {
        if (this.$indexRoute) {
            this.$definedRoutes.push({
                path: "/",
                $class: this.$indexRoute,
                pathsplit: []
            })
        }
        if (this.$routes) {
            this.$routes.forEach(_r => {
                this.$definedRoutes.push({
                    path: "/" + _r.name.toLowerCase(),
                    $class: _r,
                    pathsplit: [_r.name.toLowerCase()]
                })
                Object.keys(new _r()).filter(_ => _ != "index").forEach(_subroutes => {
                    this.$definedRoutes.push({
                        path: "/" + _r.name.toLowerCase() + "/" + _subroutes.toLowerCase(),
                        $class: _r,
                        pathsplit: [_r.name.toLowerCase(), _subroutes.toLowerCase()]
                    });
                })
            })
        }
    }
    handleRoutes() {
        this.initRoutes();
        return (req, res) => {
            let RouteClass = this.resolveRoute(url.parse(req.url).path.toLowerCase());
            if (RouteClass) {
                getRawBody(req)
                    .then((buf) => {
                        Object.defineProperty(req, "body", {
                            value: buf.toString(),
                            writable: false,
                            configurable: true
                        });
                        this.useRoute(req, res, RouteClass);
                    })
                    .catch(e => {
                        Object.defineProperty(req, "body", {
                            value: null,
                            writable: false,
                            configurable: true
                        });
                        this.useRoute(req, res, RouteClass);
                    })
            }
            else {

            }
        }
    }

    createServer() {
        this.$server = http.createServer(this.handleRoutes());
    }
    start() {
        this.createServer();
        this.$server.listen(this.$port | defaultConfig.defaultPort);
    }
}

export default Storm;
