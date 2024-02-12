const express = require('express');
const cors = require('cors');


const app = express();


// Importing Routes
const testsRouters = require('./routes/testRoutes');
const userRouters  = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use(testsRouters);
app.use(userRouters);

app.listen(process.env.PORT, () => {
    console.log("Server is listening at port", process.env.PORT);
});