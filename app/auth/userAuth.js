const jwt = require('jsonwebtoken');

const userAuth = (req, res) => {
    return new Promise((resolve, reject) => {
        let token = req.headers.authorization;
    
        if(token){
            token = token.split(" ")[1];
        }
    
        const jwt_header = {algorithm: "HS256"};
        const secret = "sheeshh";
        jwt.verify(token, secret, jwt_header, (err, decode) => {
            if(err){
                reject({code:400, err});
            }
            resolve({code:200, data:decode});
        })
    })    
}

module.exports = userAuth;