// Item Model
const Item = require('../models/Item');


// GET api/items
exports.getItems = (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items));
};

// POST api/items
exports.addItem = (req, res) => {
    const newItem = new Item({
        title: req.body.title
    });
    newItem.save()
        .then(item => res.json(item));
}

// DELETE api/items/:id
exports.deleteItem = (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
}