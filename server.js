const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

// Load the budget data from budget.json using require
const budget = require('./budget.json');

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.get('/hello', (req,res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});