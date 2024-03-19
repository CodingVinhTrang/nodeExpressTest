//Grabbing our MovieDao class from dao folder
const daoClass = require('../../dao/moviedao')

//NEW local class being made
const dao = new daoClass();

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    dao.findALL(req, res);
})


module.exports = router;