const express = require('express');
const bodyparser = require('body-parser');


// Create express App 
const app = express();

// Setup the server PORT
const PORT = process.env.PORT || 5000;

// parse request data content type application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// parse request data content type application json
app.use(bodyparser.json());

// Define root route
app.get("/", (req, res) => {
    res.send("NODE API IN MVC PATTERN");
});
// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

// create employee routes
app.use('/api/v1/allemployee', employeeRoutes);

// LIsten to the PORT
app.listen(PORT, (err) => {
    if (err) {
        console.log("ERR in connection ");
    } else {
        console.log(`SERVER connected at port:${PORT}`);
    }
});