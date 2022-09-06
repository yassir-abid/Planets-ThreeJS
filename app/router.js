const { Router } = require('express');

const controller = require('./controllers/controller');

const router = Router();

router.get('/', controller.home);
router.get('/:planet', controller.planet);

module.exports = router;