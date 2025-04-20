const express = require('express');
const app = express()
const taskRouter = require('./routes/taskRouter');
const bodyParser = require('body-parser');
const cors = require('cors')

require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./models/db')


app.get('/', (req, res) => {
    res.send("server is  running");
    
})

app.use(cors())
app.use(bodyParser.json())
app.use('/tasks',taskRouter)

app.listen(PORT, () => {
    console.log(`server is runnning on port :  ${PORT}`);

})