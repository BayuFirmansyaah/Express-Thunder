const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;


// configuration
app.use(morgan('development'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// routes here
const homeRouter = require('./app/routes/home');



// use router
app.use('/', homeRouter);


// page not found
app.use((req, res, next) => {
    res.send(200);
})



// runing server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})