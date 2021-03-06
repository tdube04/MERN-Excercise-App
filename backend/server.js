const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

// 'mongodb://localhost/exerciseDB'
const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://localhost/exerciseDB', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully")
})

const exerciseRouter = require('./routes/excercise');
const usersRouter = require('./routes/users');

app.use('/exercise', exerciseRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});



