const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/items.json');

// Helper functions
const readData = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET all items
router.get('/', (req, res) => {
    const items = readData();
    res.json(items);
});

// POST a new item
router.post('/', (req, res) => {
    const items = readData();
    const newItem = {
        id: Date.now(),
        name: req.body.name,
        category: req.body.category,
        price: req.body.price
    };
    items.push(newItem);
    writeData(items);
    res.status(201).json(newItem);
});

module.exports = router;
