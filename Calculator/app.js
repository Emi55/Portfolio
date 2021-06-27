var express = require('express')
const bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({extended:true}));


app.use(bodyParser()); //Now deprecated
app.use(bodyParser.json());


app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/',(req,res)=>{
  const n1=req.body.number-1
  const n2=req.body.number-2
  const add= n1 +n2
  res.send('the value is'+add)
}) ; 



app.post('/',(req,res)=>{
  const n1=req.body.number-1
  const n2=req.body.number-2
  const remove= n1 -n2
  res.send('the value is'+remove)
})  

app.post('/',(req,res)=>{
  const n1=req.body.number-1
  const n2=req.body.number-2
  const multiply= n1 *n2
  res.send('the value is'+multiply)
})  

app.post('/',(req,res)=>{
  const n1=req.body.number-1
  const n2=req.body.number-2
  const divide= n1 /n2
  res.send('the value is'+divide)
})  

app.listen(5000,(response)=>{
    console.log("Server runs on port 5000")
})

