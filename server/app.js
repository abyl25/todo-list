const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Routes
const itemRoutes = require('./routes/items');  
const authRoutes = require('./routes/auth');
// MongoDB
require('./config/db');  

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);

// API Index Route
app.get('/api', (req, res) => {
    console.log('REST API works');
    res.status(200).send('REST API works!');
});


// Server
const port = process.env.PORT || 5000;
app.listen(port, () => 
    console.log(`Node server started at port ${port}`)
);

module.exports = app;