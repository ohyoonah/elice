const passport = require('passport');
const googleStrategy = require('./googleStrategy'); // 구글서버로 로그인할때

const User = require('../model/User');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({ where: { id } })
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    googleStrategy();
};