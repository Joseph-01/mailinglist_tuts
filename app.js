const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(2020, () => {
    console.log("Server is runing");
});