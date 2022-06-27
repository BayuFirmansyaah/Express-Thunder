const model = require('../model/mahasiswa');
const response = require('../helper/response');
const api = require('../helper/api');
const controller = {};


controller.index = async (req, res) => {
    const mahasiswa = await model.mahasiswaCollection();
    response(res, 200, mahasiswa);
}

controller.add = async (req, res) => {
    const {name, prodi, nim} = req.body;
    const result = await model.mahasiswaNew({name, prodi, nim});
    response(res, 200, result);
}

controller.update = async (req, res) => {
    const {id, name, prodi, nim} = req.body;
    const result = await model.mahasiswaUpdate({id, name, prodi, nim});
    response(res, 200, result);
}

controller.remove = async (req, res) => {
    const {id} = req.body;
    const result = await model.mahasiswaRemove(id);
    response(res, 200, result); 
}

controller.api = async (req, res) =>{
    const url = "https://data.covid19.go.id/public/api/prov.json";
    const result = await api(url, "GET");
    response(res, 200, result);
}

module.exports = controller;
