const express = require('express');
const Joi = require('joi');
const fruitsRouter = express.Router();

const fruits = [
    {id: '1', name: 'orange'},
    {id: '2', name: 'apple'},
    {id: '3', name: 'lemon'},
];

fruitsRouter.get('/api/fruit', function(req,res) {
    res.send(fruits);
});

fruitsRouter.post('/', function(req,res) {
    const {error} = validateFruits(req.body);
    // console.log(error);
    if (error) return res.status(400).send(error.details[0].message);
    const fruit = {
        id: fruits.length + 1,
        name: req.body.name
    };
    fruits.push(fruit);
    res.send(fruits);
});

fruitsRouter.put('/:id', function(req,res) {
    const {error, value} = validateFruits(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const updateFruit = {
        id: req.params.id,
        name: req.body.name
    }
    const index = fruits.findIndex((fruit) => fruit.id == req.params.id);
    if (index != -1) {
        fruits[index] = updateFruit;
    } 
    res.send(fruits);

});

fruitsRouter.delete('/:id', function(req,res) {
    const {error, value} = validateFruits(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const index = fruits.findIndex(fruit => fruit.id == req.params.id);
    fruits.splice(index,1);
    res.send(fruits);
});
    
function validateFruits(fruit) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(fruit);
};


module.exports = fruitsRouter;