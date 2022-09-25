const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();

const articleRoute = require("./src/routes/articleRoute");
const historyRoutes = require("./src/routes/historyRoutes");
const categoriesRoutes = require("./src/routes/categoriesRoutes");
const subCategoriesRoutes = require("./src/routes/subcategoriesRoutes");

const cors = require('cors');
const port = process.env.PORT || 8000;

//middleware
app.use(cors())
app.use(express.json())
app.use(historyRoutes);
app.use(categoriesRoutes);
app.use(subCategoriesRoutes);
app.use(articleRoute);

// routes
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.send('Works')
});


//mongoose conection
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to mongo db atlas succesful'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port ', port));

