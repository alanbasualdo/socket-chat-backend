const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};

const verificarJWT = (token = '') => {

    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        return [true, uid]
    } catch (error) {
        return [false, null]
    }
}

module.exports = {
    generarJWT,
    verificarJWT
};