import { Route,requestMethods } from "../../../lib/index";
import React from "react";
import Comp from "./component";
import fs from "fs"
import path from "path"

export default class Index extends Route {
    constructor(){
        super();
        this.index = this.index.bind(this);
        this.stormimage = this.stormimage.bind(this)
    }
    @requestMethods("get","post")
    index(){
        return <Comp />
    }
    stormimage(){
        return fs.createReadStream(path.join(__dirname,"storm.png"))
    }
    
    @requestMethods("get","post")
    about(){
        return "Hello";
    }
}