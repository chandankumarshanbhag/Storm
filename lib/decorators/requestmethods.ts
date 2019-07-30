
import { defineRouteProps,initialRouteProps } from "./../index"

export default function requestMethods(...args: string[]) { 
    args = args.map(x => x.toString().toUpperCase())
    return function (target, propertyKey: string, descriptor: PropertyDescriptor){
        if(target.$storm == undefined){
            defineRouteProps(target)
            console.log("storm props",target.$storm)
        }
        if(target.$storm.routes[propertyKey.toLowerCase()] == undefined){
            target.$storm.routes[propertyKey.toLowerCase()] = initialRouteProps()
        }
        target.$storm.routes[propertyKey.toLowerCase()].methods = args
    } 
}