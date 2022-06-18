const controller = {};
const model = require('../model/mahasiswa');


controller.index = async (req, res) => {
    const mahasiswa = await model.mahasiswaCollection();
    res.send(mahasiswa);
}

controller.add = async (req, res) => {
    const {name, prodi, nim} = req.body;
    const result = await model.mahasiswaNew({name, prodi, nim});
    res.send(result);
}

controller.update = async (req, res) => {
    const {id, name, prodi, nim} = req.body;
    const result = await model.mahasiswaUpdate({id, name, prodi, nim});
    res.send(result);
}

controller.remove = async (req, res) => {
    const {id} = req.body;
    const result = await model.mahasiswaRemove(id);
    res.send(result); 
}

module.exports = controller;
