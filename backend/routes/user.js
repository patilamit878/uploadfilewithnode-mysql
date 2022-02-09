const utils = require('../utils');
const express = require('express');
const db = require('../db');
//load multer
const multer = require('multer')

//init the destination path
const upload = multer({ dest: './images' })

const router = express.Router()

router.get('/', (request, response) => {
    const statement = `select * from user`
    db.execute(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/', upload.single('photo'), (request, response) => {
    const { name, email } = request.body

    const statement = `insert into user (name, email, profile) values ('${name}', '${email}', '${request.file.filename}')`
    db.execute(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})


module.exports = router