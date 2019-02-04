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
    console.log('req.body.title: ');
    console.log(req.body.title);
    const newItem = new Item({
        title: req.body.title
    });
    newItem.save()
        .then(item => res.json(item));
}

// DELETE api/items/:id
exports.deleteItem = (req, res) => {
    console.log('req.params.id: ');
    console.log(req.params.id);
    
    Item.findById(req.params.id)
        .then(item => item.remove()
        .then(() => res.json({
            success: true, 
            message: 'item deleted'
        })))
        .catch(err => res.status(404).json({success: false}));
}