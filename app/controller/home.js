const asyncQuery = require('../helper/mysql/asyncQuery')
const controller = {}

controller.index = (req, res) => {
    if(!req.session.user_id){
        res.send("you must login before use this application");
    }else{
        res.render('home/index',{
            title:'Home | express custom',
            css : 'index',
            js: 'null',
        });
    }
}

controller.about = (req, res) => {
    res.send(200)
}

controller.pricing = (req, res) => {
   req.session.user_id = 10;
   req.session.save();
   res.send("suksess login")
}


module.exports = controller;

