const { Router } = require('express');

const controller = require('./controllers/controller');

const router = Router();

router.get('/', controller.home);
router.get('/:planet', controller.planet);

router.use(controller.notFound);

module.exports = router;