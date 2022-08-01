const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const debug = require('debug')('elice');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const userRouter = express.Router();

app.post('/upload', upload.single('image'), (req, res, next) => {
  debug('/upload - req.file', req.file);
  debug('/upload - req.body', req.body);
  res.status(200);
  res.send({data: 'Upload is complete!'});
});

app.listen(PORT, () => console.log('listening...'));

userRouter.use(function(req, res, next) {
  console.log('router.use(/) - %s %s %s', req.method, req.url, req.path);
  next();
});

//GET http://localhose:3000/user/2
//POST http://localhose:3000/user/2
//PUT http://localhose:3000/user/2
//DELETE http://localhose:3000/user/2

userRouter.use('/:id', function(req, res, next) {
  console.log('router.use(/:id) - req', typeof(req));
  next();
});


const authRouter = express.Router();

function authenticate(req, res, next) {
  console.log('authenticate', req.headers);
  const key = req.headers.key || "";
  if(key === 'elice')
    next();
  else {
    req.status(400);
    res.send({message: 'Unauthorized'});
  };
};

authRouter.use(authenticate);

authRouter.get('/', function(req, res, next) {
  console.log('authRouter.use(/)');
})