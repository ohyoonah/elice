
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {userSchema: User} = require('../model');
const googlePassport = require('../passport');
const verifyToken = require('../middlewares/authentication');
const passport = require('passport');
const express = require('express');
const userRouter = express.Router();

console.log('googlePassport', typeof(googlePassport), googlePassport);
googlePassport();

userRouter.post('/login', async (req, res, next)=>{
   try {
      console.log('POST /login req.body', req.body);
      const user = req.body;
      const foundUser = await User.findOne({id: user.id}).exec();
      console.log('POST /login foundUser', foundUser);
      if (foundUser) {
         const result = bcrypt.compareSync(user.password, foundUser.password);
         console.log('POST /login result', result);
         if (result) {
            const jwt_token = await jwt.sign(user.id, process.env.JWT_SECRET_KEY);
            res.json({
               message: '로그인에 성공했습니다!',
               token: jwt_token,
            });
         } else {
            res.writeHead(403);
            res.end('사용자 아이디 혹은 패스워드가 일치하지 않습니다!');
         }
      } else {
         res.writeHead(401);
         res.end('사용자 아이디를 찾을 수 없습니다!');
      }
   } catch(err) {
      next(err);
   }
});

userRouter.post('/signup', async (req, res, next)=>{
   try {
      console.log('POST /signup', req.body);
      const user = req.body;
      const newUser = new User({
         name: user.name,
         id: user.id,
         password: bcrypt.hashSync(user.password, 12),
      });
      const result = await newUser.save();
      if (result) {
         const jwt_token = await jwt.sign(user.id, process.env.JWT_SECRET_KEY);
         res.json({
            message: '회원 가입에 성공했습니다!',
            token: jwt_token,
         });
      } else {
         res.writeHead(409);
         res.end('사용자의 요청을 처리할 수 없습니다!');
      }
   } catch(err) {
      next(err);
   }
});

userRouter.get('/logout', (req, res, next)=>{
   console.log('GET /logout', req.logout);
   req.logout((err)=>{
      if(err) {
         return next(err);
      }
      req.session.destroy();
      res.redirect('/');
   });

});

userRouter.get('/:id', verifyToken, async (req, res, next)=>{
   try {
      const foundUser = await User.findOne({id: req.params.id}).exec();
      console.log('GET /:id', foundUser);
      if (foundUser) {
         res.send(foundUser);
      } else {
         res.writeHead(404);
         res.end('해당 아이디의 사용자를 찾을 수 없습니다!');
      }
   } catch (err) {
      next(err);
   }
});


userRouter.get('/google/login',
    passport.authenticate('google', {scope: ['email', 'profile']}
    ));

userRouter.get('/google/callback',
      passport.authenticate('google', {
         successRedirect: '/profile',
         failureRedirect: '/',
         session: false,
}), (req, res, next)=>{
  res.redirect('/');
});



module.exports = userRouter;