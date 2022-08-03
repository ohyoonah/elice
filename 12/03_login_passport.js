
const path = require('path');

// Default: path.resolve(process.cwd(), '.env')
require('dotenv').config({
    path: path.join(__dirname, '.env'),
    debug: process.env.DEBUG,
});
const morgan = require('morgan');
const {userRouter} = require('./routes');
const session = require('express-session');
const passport = require('passport');
const express = require('express');
const app = express();

app.use(morgan('tiny'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET_KEY,
    cookie:{
        httpOnly: true,
        secure: false,
    },
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/user', userRouter);

function express_last_middleware(req, res, next) {
    console.log('express_last_middleware', req.url);
    res.writeHead(404);
    res.end('요청하신 페이지는 존재하지 않습니다 ㅠㅠ');
}

function express_error_handler(err, req, res, next){
    console.log('express_error_handler', req.url);
    console.error(err);
    res.writeHead(500);
    res.end('서버에서 에러가 발생했습니다!');
}

app.use(express_last_middleware);
app.use(express_error_handler);

app.listen(3000);

