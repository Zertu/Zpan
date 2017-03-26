exports = module.exports= async function (ctx) {    
    const req = ctx.request
    switch (req.url) {
        case '/login':
            login(req, ctx.response)            
        default:
        break
    }
    return ctx.response
}


async function login(req, res) {
     
}