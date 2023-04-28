const express = require ('express');
const app = express();
const path = require ("path");
const { testDate } = require('./midellwars/date');


const port = 4000;
app.listen (port,()=>{
    console.log('server run')
})
app.set('views','./views');
app.set('view enging','pug');
app.get('/',(req,res)=>{
    res.render('home')
});
app.get('/contact',(req,res)=>{
    res.render('contact')
});
app.get('/service',(req,res)=>{
    res.render('service')
});
app.use(express.static(path.join(_dirname , "public")))
app.use (testDate)

