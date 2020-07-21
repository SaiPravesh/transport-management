const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// Create express server
const app = express();

// Initialise application
app.use(express.json());

// May need to add cors

// Connect to database
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.error(err));

// Define application routes
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});
