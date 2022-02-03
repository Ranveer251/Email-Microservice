const express = require('express');
const routes = require('../api/v1/routes')
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(function(err, req, res, next) {
//   console.log(err);
//   // if(err){
//     // console.error(err);
//     res.sendStatus(500);
//   // }
// })
app.use('/api/v1',routes);

app.use(function (err, req, res, next) {
  res.status(err.statusCode || 500).send(err)
})

app.get('/ping', (req, res) => res.send('OK'));

app.get("*", (req, res) => {
  res.status(404).send("<h1>Page not found!<h1>");
});

process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  process.exit(1) 
})

module.exports = app;