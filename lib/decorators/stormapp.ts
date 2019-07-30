function stormApp(options){
    return (target) => {
        Object.defineProperty(target.prototype,"$indexRoute",{
            writable: false,
            configurable: true,
            value: options.indexRoute
        })
        Object.defineProperty(target.prototype,"$routes",{
            writable: false,
            configurable: true,
            value: options.routes
        })
        Object.defineProperty(target.prototype,"$port",{
            writable: false,
            configurable: true,
            value: options.port
        })
    }
}

export default stormApp;