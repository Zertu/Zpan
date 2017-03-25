const koa = require('koa')
,app=new koa()
Restful=require('./router/Restful')
app.use((ctx,next)=>{
    let req=ctx.request
    Restful.router(ctx.method,ctx,next).then(res=>{     
    ctx.body=res.body
    })
})

app.listen(3001)