const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const Mail=require('./utils/mail');
const bodypaser=require('body-parser');
const request =require('request');
app.use(bodypaser.urlencoded({ extended: false }));
app.use(bodypaser.json());

// 路由



app.use('/', express.static(path.join(__dirname, './static')));

app.get('/', (req, res)=>{
    res.redirect('./html/index.html')
});



app.listen(port,()=>{
    console.log('server start')
});
