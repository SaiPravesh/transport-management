const { Router } = require('express');
const Supplier = require('../models/supplier.model');

const router = new Router();

router.get('/', async (req, res) => {
    const suppliers = await Supplier.find();
    res.send(suppliers);
});

router.get('/:supplierId', async (req, res) => {
    const supplier = await Supplier.findOne({
        supplierId: req.params.supplierId,
    });
    res.send(supplier);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const supplier = await new Supplier({
        ...req.body,
    });
    supplier.save();
    res.send(supplier);
});

module.exports = router;
