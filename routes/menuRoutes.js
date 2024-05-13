const express = require('express')
const router = express.Router();
const Person = require('../models/menu')
const MenuItem = require('../models/menu')

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save()
        console.log("Data Saved")
        res.status(200).json(response)

    }
    catch (err) {
        console.log("Error Saving Person", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Data Fetched')
        res.status(200).json(data)
    }
    catch (err) {
        console.log("Error Saving Person", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;
