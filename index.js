const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
// Routers
const apiRouter = require('./routes');

const app = express();
app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// primera ruta
app.use('/api', apiRouter);

// app.get('*', (req, res)=>{
//     res.status(404).send("Hola, no encontré nada");
// })
app.set('PORT', process.env.PORT || 3000 );

app.listen(app.get('PORT'), ()=>{
    console.log("Server up");
});