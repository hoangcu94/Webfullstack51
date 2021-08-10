const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());
const fruitsRouter = require("./router/fruitsRouter");

app.use('/api/fruit', fruitsRouter);

app.listen(5000, () => console.log('Server dang lang nghe tren cong 5000'));