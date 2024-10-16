const express = require('express');
const app = express();
app.use(express.json()); // Parses JSON requests
// Placeholder route
app.get('/', (req, res) => {
res.send('Welcome to the API!');
});
router.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Bolu' }, { id: 2, name: 'Zara' }]);
    });
module.exports = app;






