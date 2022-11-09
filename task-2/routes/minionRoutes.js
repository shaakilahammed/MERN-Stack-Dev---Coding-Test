const router = require('express').Router();
const minionController = require('../controllers/minionController');

router.get('/', minionController.getMinions);

router.post('/create', minionController.createMinion);

router.put('/:id', minionController.updateMinion);

router.delete('/:id', minionController.deleteMinion);

module.exports = router;
