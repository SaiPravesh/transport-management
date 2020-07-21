const { Router } = require('express');
const Fuel = require('../models/fuel.model');

const router = new Router();

router.get('/', async (req, res) => {
    const fuels = await Fuel.find();
    res.send(fuels);
});

router.get('/:fuelId', async (req, res) => {
    const fuel = await Fuel.findOne({
        fuelId: req.params.fuelId,
    });
    res.send(fuel);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const fuel = await new Fuel({
        ...req.body,
    });
    fuel.save();
    res.send(fuel);
});

module.exports = router;
