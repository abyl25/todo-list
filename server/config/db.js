var mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/todo-list';
mongoose.connect(uri, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log('ERROR: ' + err));