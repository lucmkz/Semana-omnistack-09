const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-lst5f.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);