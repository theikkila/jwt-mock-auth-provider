

const jwt = require('jsonwebtoken')
const restify = require('restify')

const corsMiddleware = require('restify-cors-middleware')



var server = restify.createServer();

const cors = corsMiddleware({
  origins: ['*']
})

server.pre(cors.preflight)
server.use(cors.actual)

server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());

server.get('/', (req, res, next) => {
  res.send({message: "See API-docs from Readme.md"})
  next();
});

server.post('/auth', (req, res, next) => {
  console.log("Generate auth token", req.body)
  const token = jwt.sign(
    req.body,
    process.env.PRIVATE_KEY,
    { algorithm: 'RS256'});

  res.send({token})
  next();
});


server.listen(8080, function() {
  console.log('JWT mock auth listening at %s', server.url);
});
