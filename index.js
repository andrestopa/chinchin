var express = require("express");
const mongoose = require('mongoose');
var app = express();
var port = 3000;
const apiRoutes = require('./app/routes');

mongoose.connect("mongodb://developer:safecloud1@ds125058.mlab.com:25058/poc-app", {
    useUnifiedTopology: true,
    useNewUrlParser: true,

})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('DB Connection Error: ', err.message);
    });

// app.use(express.json());
app.use('/api', apiRoutes);

app.get("/", (req, res) => {
    res.send("this is test app");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});