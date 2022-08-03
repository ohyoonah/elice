const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    try {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            // maybe throw JsonWebTokenError
            const payload = jwt.verify(bearerToken, process.env.JWT_SECRET_KEY);
            console.log('payload', payload);
            next();
        } else {
            res.writeHead(403);
            res.end('로그인이 필요한 서비스입니다!');
        }
    } catch (err) {
        res.writeHead(403);
        res.end('로그인이 필요한 서비스입니다!');
    }
}

module.exports = verifyToken;