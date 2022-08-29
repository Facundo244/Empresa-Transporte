
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static("public"));


app.listen(process.env.PORT || 3030, function(){

  console.log("Puerto funcionando en el 3030!")
  
})


app.get('/', (req,res)=>{

  res.sendFile(path.join(__dirname,'./views/home.html'));

});


app.post('/', (req,res)=>{

  
  res.sendFile(path.join(__dirname,'./views/home.html'));

});

app.get('/registro', (req,res)=>{

  res.sendFile(path.join(__dirname,'./views/register.html'));

});



app.get('/login', (req,res)=>{

  res.sendFile(path.join(__dirname,'./views/login.html'));

});







