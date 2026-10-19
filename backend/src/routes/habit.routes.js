const express = require('express');
const router = express.Router();
const controller = require('../controllers/habit.controller');
const validate = require('../middlewares/validate');
const { requireAuth } = require('../middlewares/auth.middleware');
const { createHabitSchema } = require('../validations/habit.validation');

router.use(requireAuth);

router.get('/', controller.getAll);
router.post('/', validate(createHabitSchema), controller.create);
router.delete('/:id', controller.remove);

module.exports = router;