const express = require('express');
const router = express.Router();
const mahasiswa = require('../controller/mahasiswa');

router.get('/', mahasiswa.api);
router.post('/', mahasiswa.add);
router.put('/', mahasiswa.update);
router.delete('/', mahasiswa.remove)

module.exports = router;
