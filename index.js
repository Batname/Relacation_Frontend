"use strict";

let koa = require("koa"),
    views = require("co-views"),
    serve = require('koa-static');

let app = koa();

let render = views(__dirname + "/views", { map: { html: 'jade' }});

app.use(serve('public'));

app.use(function *index() {

  let body, data;

  body = yield render('index.jade');

  this.body = body;
});




app.listen(process.env.PORT);
console.log('listening on port ' + process.env.PORT);