const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");
const tasksRouter = require('./controllers/tasks')

async function connectServer() {

    const uri = process.env.MONGODB_URI;
    console.log('trying to connect');
    try {
        console.log('connecting...')
        mongoose.connect(uri);
        console.log('db connected')

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
            console.log(mongoose.connection);
        })
    } catch (error) {
        console.log('failed to connect: ')
        console.log(error.message);
        process.exit(1)
    }

}

connectServer();

app.use('/api/tasks', tasksRouter);
app.use(cors())
app.use(express.json())

module.exports = app