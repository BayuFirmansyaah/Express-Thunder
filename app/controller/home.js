const asyncQuery = require('../helper/mysql/asyncQuery')

exports.getCollectionMahasiswa = async () => {
    const mahasiswa = await asyncQuery("SELECT * FROM mahasiswa");
    return mahasiswa;
}

