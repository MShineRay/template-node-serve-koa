'use strict';
/**
 * Entry point for JS-API app.
 * Initializes the database and starts listening for requests on configured port.
 */

const koa = require('koa');
const app = new koa();
const logger = require('koa-logger');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
  // _ = require('lodash'),
const  appRouter = require('./router');
// const KoaRouter = require('@koa/router')
// Koa config
app.use(logger());

app.use(cors({
  maxAge: 0,
  credentials: true,
  // methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
  methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
  headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(bodyParser());
const port = 3000;
// app.use(route.get('/dingtalk/markdown', (ctx) =>{
//   console.log(1)
//   ctx.body = {code: 0, msg: 'success'}
// }));
app.use(appRouter.routes());
app.use(appRouter.allowedMethods());
// app.use(appRouter.allowedMethods({
//   throw: true,
//   notImplemented: () => Boom.notImplemented(),
//   methodNotAllowed: () => Boom.methodNotAllowed()
// }));

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
  ctx.body = 'server error'
});

app.listen(port)

console.log('server started on port %s', port)
module.exports = app;
