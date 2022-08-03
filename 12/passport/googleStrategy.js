const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const {userSchema: User} = require('../model');

function googleStrategyMiddleware (req, res, next) {
    passport.use(
        new GoogleStrategy({
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: process.env.GOOGLE_CALLBACK_URL,
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    console.log('GoogleStrategy', profile);
                    const id = profile.emails[0].value; // email
                    const foundUser = await User.findOne({id}).exec();
                    if (foundUser) {
                        return done(null, foundUser);
                    } else {
                        const newUser = await User.create({
                            id: id,
                            name: profile.displayName,
                            provider: profile.provider,
                        });
                        return done(null, newUser);
                    }
                } catch(err) {
                    next(err);
                }
            }
        )
    );
}

module.exports = googleStrategyMiddleware;

