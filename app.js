
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static("public"));


app.listen( 3030 , ()=>{
  console.log('Servidor levantado!!');
});


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




