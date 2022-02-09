const utils = require('../utils');
const express = require('express');

const router = express.Router()

router.get('/', (request, response)=> {
 response.send(utils.createResult(null, "welcome to the application"));
})


module.exports = router