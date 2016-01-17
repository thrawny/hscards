const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const config = require('./webpack.config');
const fetch = require('isomorphic-fetch');

const app = new(require('express'));
const port = 3000;
const compiler = webpack(config);

const KEY = require('./secret');

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());

app.get('/api/card/:name', (req, res) => {
  fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${req.params.name}?collectible=1`, {
    headers: {
      'X-Mashape-Key': KEY
    }
  }).then(response => response.json())
    .then(json => res.json(json));
});

app.get('/api/search/:text', (req, res) => {
  fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${req.params.text}?collectible=1`, {
    headers: {
      'X-Mashape-Key': KEY
    }
  }).then(response => response.json())
    .then(json => res.json(json));
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});



//const WebpackDevServer = require('webpack-dev-server');

//new WebpackDevServer(webpack(config), {
//  publicPath: config.output.publicPath,
//  hot: true,
//  historyApiFallback: true
//}).listen(3000, 'localhost', function (err, result) {
//  if (err) {
//    console.log(err);
//  }
//
//  console.log('Listening at localhost:3000');
//});
