const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("First Middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Second Middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(5002)