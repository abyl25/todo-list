const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');  // MongoDB
const itemRoutes = require('./routes/items');  // Routes

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// routes
app.use('/api/items', itemRoutes);


// API Index Route
app.get('/api', (req, res) => {
    console.log('REST API works');
    res.status(200).send('REST API works!');
});


// Server
const port = 5000 || process.env.PORT;
app.listen(port, () => 
    console.log(`Node app started at port ${port}`)
);

module.exports = app;