const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();

const historyRoutes = require("./src/routes/historyRoutes");
const categoriesRoutes = require("./src/routes/categoriesRoutes");

const port = process.env.PORT || 8000;

//middleware
app.use(express.json())
app.use(historyRoutes);
app.use(categoriesRoutes);



// routes
app.get('/', (req, res) => {
    res.send('Works')
});


//mongoose conection
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to mongo db atlas succesful'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port ', port));

