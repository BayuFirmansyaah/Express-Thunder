const asyncQuery = require('../helper/mysql/asyncQuery')
const controller = {}

controller.index = (req, res) => {
    res.render('home/index',{
        title:'Home | express custom',
        css : 'index',
        js: 'null',
    });
}

controller.about = (req, res) => {
    res.send(200)
}

controller.pricing = (req, res) => {
    res.send(200)
}


module.exports = controller;

