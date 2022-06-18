const collection = require('../helper/mysql/collection');
const insert = require('../helper/mysql/insert');
const update = require('../helper/mysql/update');
const remove = require('../helper/mysql/remove');
const model = {};

model.mahasiswaCollection = async () => {
    const data = await collection('mahasiswa');
    return data;
}

model.mahasiswaNew = async (data) => {
    const mahasiswa = await insert('mahasiswa', data);
    return mahasiswa;
}

model.mahasiswaUpdate = async (data) => {
    const mahasiswa = await update('mahasiswa', data);
    return mahasiswa;
}

model.mahasiswaRemove = async (id) => {
    const mahasiswa = await remove('mahasiswa', 'id', id);
    return mahasiswa;
}

module.exports = model;