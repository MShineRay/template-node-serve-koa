# template-node-serve-koa
template-node-serve-koa

## doc
- [koa](https://koa.bootcss.com/#)
- [koa wiki](https://github.com/koajs/koa/wiki)
- [koa examples](https://github.com/koajs/examples)
- [@koa/router API](https://github.com/koajs/router/blob/master/API.md)


## test
~~~json
{
  "name": "template-node-serve-koa",
  "version": "1.0.0",
  "description": "template-node-serve-koa",
  "main": "index.js",
  "dependencies": {
    "koa": "^2.13.4",
    "koa-bodyparser": "^4.3.0",
    "koa-logger": "^3.2.1",
    "lodash": "^4.17.21",
    "koa-cors": "^0.0.16"
  },
  "devDependencies": {
    "@koa/router": "^10.1.1",
    "markdown": "^0.5.0",
    "nodemon": "^2.0.15",
    "request": "^2.88.2"
  },
  "scripts": {
    "start": "nodemon node --harmony index.js",
    "test": "nodemon mocha --harmony"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MShineRay/template-node-serve-koa.git"
  },
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/MShineRay/template-node-serve-koa/issues"
  },
  "homepage": "https://github.com/MShineRay/template-node-serve-koa#readme"
}

~~~