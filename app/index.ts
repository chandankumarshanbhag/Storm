import { stormApp } from "./../lib/index"
import Storm from "./../lib/index"


import IndexRoute from "./src/Index/Index"
import TestRoute from "./src/Test/Test"

@stormApp({
    port: 3000,
    indexRoute: IndexRoute,
    routes: [
        TestRoute
    ]
})
class App extends Storm {
    constructor(){
        super();
        this.unhandledRequest = this.unhandledRequest.bind(this)
    }
    
    unhandledRequest(){
        console.log("unhandled request");
    }
}

new App().start()