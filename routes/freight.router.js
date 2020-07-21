const { Router } = require('express');
const Freight = require('../models/freight.model');

const router = new Router();

router.get('/', async (req, res) => {
    const freights = await Freight.find();
    res.send(freights);
});

router.get('/:freightId', async (req, res) => {
    const freight = await Freight.findOne({
        freightId: req.params.freightId,
    });
    res.send(freight);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const freight = await new Freight({
        ...req.body,
    });
    freight.save();
    res.send(freight);
});

module.exports = router;
