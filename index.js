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
const indexRouter = require('./router/app');


app.use('/public', express.static(path.join(__dirname, './static')));


app.use('/', indexRouter);

app.listen(port,()=>{
  console.log('server start')
});
