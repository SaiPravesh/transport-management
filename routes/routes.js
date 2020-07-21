const express = require('express');

const router = express.Router();

// Index router
router.get('/', (req, res) => {
    res.send(`Sever is up and running at ${new Date()}`);
});

// All other application routers
router.use('/freights', require('./freight.router'));
router.use('/fuels', require('./fuel.router'));
router.use('/suppliers', require('./supplier.router'));

module.exports = router;
