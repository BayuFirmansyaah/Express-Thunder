const express = require('express');
const router = express.Router();

// controller
const homeController = require('../controller/home')

router.get('/', async (req, res, next) => {
    const mahasiswa = await homeController.getCollectionMahasiswa();
    res.send(mahasiswa);
})

router.get('/about', (req, res, next) => {
    res.send("about");
})

router.get('/pricing', (req, res, next) => {
    res.send("pricing");
})


module.exports = router;