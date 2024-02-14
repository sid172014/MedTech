const express = require('express');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');

const app = express();


// Defining the paths for Express Confiurations
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

// Setting up handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialPath);


// hbs.registerPartials(partialPath);

// Importing Routes
const userRouters  = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static(publicDirectoryPath));
app.use(userRouters);



app.listen(process.env.PORT, () => {
    console.log("Server is listening at port", process.env.PORT);
});