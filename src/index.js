const express = require('express');
const app = express();

// Importing Routes
const testsRouters = require('./routes/testRoutes');

app.use(express.json());
app.use(testsRouters);

app.listen(process.env.PORT, () => {
    console.log("Server is listening at port", process.env.PORT);
})