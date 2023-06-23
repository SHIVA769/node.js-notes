const express=require('express')
const dbConnect=require('./mongodb')

const app=express();
app.use(express.json())

app.get('/',async(req ,res)=>{
    let data=await dbConnect()
    data=await data.find().toarray()
    res.send(data)
})
app.put('/',async(req,res)=>{
    res.send({'updata data'})
})
app.listen(4000)