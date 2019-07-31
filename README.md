# storm
storm is a webframework for nodejs

![Storm Logo](https://i.ibb.co/YfGNLBv/storm.png)


Creating a route

```js

import { Route,requestMethods } from "../../../lib/index";
import React from "react";

export default class Index extends Route {
    constructor(){
        super();
        this.index = this.index.bind(this);
    }
    @requestMethods("get","post")
    index(){
        return <h1>Hello world</h1>
    }
}

```

```js

import Storm,{ stormApp } from "./../lib/index"
import IndexRoute from "./src/Index/Index"
import TestRoute from "./src/Test/Test"

@stormApp({
    port: 3000,
    indexRoute: IndexRoute,
    routes: [
        TestRoute,
        //add more routes here
    ]
})
class App extends Storm { }

new App().start()

```


run
```
ts-node <path to your .ts file>
```


