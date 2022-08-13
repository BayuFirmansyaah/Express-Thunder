const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        const jwt_header = ({algorithm: "HS256"});
        const secret = "sheeshh";
        jwt.sign(payload,secret,jwt_header, (err, token) => {
            if(err){
                reject({code:400, err})
            }

            resolve({code:200, token});
        });
    })
}

module.exports = generateToken;