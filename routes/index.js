const router = require('express').Router(); // Manejador de rutas de express
const apiUserRouter = require('./api/users');
// const apiFilmRouter = require('./api/films');

router.use('/user', apiUserRouter);
// router.use('/film', apiFilmRouter);

module.exports = router;