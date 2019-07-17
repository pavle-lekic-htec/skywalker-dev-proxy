var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('*', proxy({
  target: 'http://localhost:3000',
  changeOrigin: true,
  logLevel: 'debug',
  ws: true,
  router: {
    '/api': 'https://skywalker.apps.htec.rs:443'
  }
}));
app.listen(80);
