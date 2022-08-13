const controller = {}
const jwt = require('jsonwebtoken');

controller.login = (req, res) => {
    const {id,username,password} = req.body;

    const jwt_header = ({algorithm: "HS256"});
    const payload = {id,username,password};
    const secret = "sheeshh";
    const token = jwt.sign(payload,secret,jwt_header);

    res.send(token);
}

controller.verify = (req, res) => {
    let token = req.headers.authorization;
    
    if(token){
        token = token.split(" ")[1];
    }

    const jwt_header = {algorithm: "HS256"};
    const secret = "sheeshh";
    jwt.verify(token, secret, jwt_header, (err, decode) => {
        if(err){
            res.send(err);
        }else{
            res.send(decode);
        }

    })
}

module.exports = controller;