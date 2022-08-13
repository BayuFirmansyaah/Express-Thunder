const mysql = require('mysql2');
const connection = require('../../database/mysql');

const asyncQuery = (sql, params = null) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (error, result) => {
            if(error){
                console.log(error);
                reject({status: 'error', code: error.code, message: "An error occured while processing data"});
            }
            resolve(result);
        })
    })
}

module.exports = asyncQuery;