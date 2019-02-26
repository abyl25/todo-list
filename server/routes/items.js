const express = require('express');
const router = express.Router();
const token = require('../services/token');
const ItemController = require('../controllers/ItemController');

// Item routes
router.use('/', token.verifyToken);

router.get('/', ItemController.getItems);

router.post('/', ItemController.addItem);

router.delete('/:id', ItemController.deleteItem);


module.exports = router;