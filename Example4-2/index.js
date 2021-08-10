const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// parsing to json
app.use(bodyParser.json());

// paring application/x-ww-form

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "pug");
app.set("view ", "views");
app.get('/', (req,res) => {
    res.render("index")
});

app.post("/", (req,res) => {
    const {body} = req;
    console.log(body);
    res.render("user", {body});
})

app.listen(3700);