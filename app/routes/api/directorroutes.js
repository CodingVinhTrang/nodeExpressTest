//Grabbing our DirectorDao class from dao folder
const daoClass = require('../../dao/directordao')

//NEW local class being made
const dao = new daoClass();

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    dao.findALL(req, res);
})


module.exports = router;