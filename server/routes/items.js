const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/ItemController');

// Item routes
router.get('/', (req, res) => ItemController.getItems);

router.post('/', (req, res) => ItemController.addItem);

router.delete('/:id', (req, res) => ItemController.deleteItem);


module.exports = router;