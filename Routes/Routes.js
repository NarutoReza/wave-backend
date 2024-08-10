const express = require('express');
const router = express.Router();

const { getAllData, getDataById, addData } = require('../Controller/DataControl');


router.get('/data', getAllData);
router.get('/single-data/:postId', getDataById);
router.post('/addData', addData);

module.exports = router