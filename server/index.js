const koa = require('koa')
,app=new koa()
Restful=require('./router/Restful')
app.use(async (ctx,next)=>{  
        ctx.response.set('Access-Control-Allow-Origin', ' *')
        ctx.response.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
        ctx.response.set('Access-Control-Allow-Methods', 'GET, POST')
        ctx.response.set('X-Powered-By','SB')
        await next()
})
app.use((ctx,next)=>{
    let req=ctx.request
    Restful.router(ctx.method,ctx,next).then(res=>{    
        console.log(res) 
    ctx.body=res.body
    })
})

app.on('error', (err, ctx) =>
  log.error('server error', err, ctx.request)
);

app.listen(3001)