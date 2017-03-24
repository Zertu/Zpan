const koa = require('koa')
,app=new koa()

app.use(ctx=>{
    let req=ctx.request,arr=[]
    for(let i in req){
        console.log(req[i])
        arr.push(req[i])
    }
    ctx.body=arr.join('')
})

app.listen(3001)