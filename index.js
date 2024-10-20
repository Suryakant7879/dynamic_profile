const express=require('express')
const app=express()
const path=require('path')
const router=require('./routes/route')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/',router)



app.listen(3000,()=>{
    console.log('server is running now in port 3000');
})