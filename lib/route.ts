import url from "url"
import response from "response";
import { Buffer } from "safe-buffer";
import { renderToString } from 'react-dom/server';
import { isValidElement } from "react"

export default class Route {
    private request: any
    private response: any
    private $storm: any
    
    public url: url.UrlWithStringQuery


    constructor() {

    }

    initRoute(req,res):void{
        this.request = req;
        this.response = res;
        this.url = url.parse(req.url);
    }
    private send(data:any):void{
        switch (typeof data) {
            case "string":
                response.html(data).pipe(this.response)
                break;
            case "number":
            case "boolean":
            case "bigint":
                response.txt(data).pipe(this.response)
                break;
            case "object":
                if (isValidElement(data)) {
                    response.html(renderToString(data)).pipe(this.response);
                }
                else if (JSON.constructor === data.constructor) {
                    response.json(data).pipe(this.response);
                }
                else {
                    if (data.pipe) {
                        data.pipe(response()).pipe(this.response)
                    }
                }
        }
    }
    handle():void{
        if(this.request && this.response){
            if(this.$storm){
                let pathsplit = this.url.path.toLowerCase().split("/").filter(x => x!='');
                let routefunc = pathsplit.length ==0 || pathsplit.length == 1 ? "index" : pathsplit[1];
                this.send((this[routefunc])());
            }
        }
    }
    
    get $get() {
        let query = url.parse(this.request.url).query
        return query ? query.split("&").reduce((acc, x) => {
            let keypair = x.split("=");
            acc[keypair[0]] = keypair[1];
            return acc;
        }, {}) : {};
    }
    get $post() {
        return this.$post ? this.$post : {}
    }

    
}
