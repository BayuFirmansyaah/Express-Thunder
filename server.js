const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


// configuration
app.use(morgan('development'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join( __dirname, '/public/assets')))

// ejs engine
app.set('views', path.join( __dirname, 'app/views'));
app.set('view engine', 'ejs');


// routes here
const homeRouter = require('./app/routes/home');
const mahasiswaRouter = require('./app/routes/mahasiswa');


// use router
app.use('/', homeRouter);
app.use('/mahasiswa', mahasiswaRouter);


// page not found
app.use((req, res, next) => {
    res.send(404);
})


// runing server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})