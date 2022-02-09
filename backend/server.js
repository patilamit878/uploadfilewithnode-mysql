const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//routes
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

const app = express();
app.use(cors('*'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(4000, '0.0.0.0', () => {
    console.log("server started on port 4000");
})