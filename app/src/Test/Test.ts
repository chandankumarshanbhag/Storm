import { Route,requestMethods,headersRequired } from "./../../../lib/index"
import fs from "fs";
import path from "path";

class Test extends Route{
    constructor(){
        super();
        this.index = this.index.bind(this)
        this.about = this.about.bind(this)
    }

    index(){
        return fs.createReadStream(path.join(__dirname,"1.png"));
    }
    
    @requestMethods("get","post")
    about(){
        console.log(this.$get["hello"])
        return { hello: "dfs"}
    }

}
export default Test;