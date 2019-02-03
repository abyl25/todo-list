const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

// Item routes
router.get('/', ItemController.getItems);

router.post('/', ItemController.addItem);

router.delete('/:id', ItemController.deleteItem);


module.exports = router;