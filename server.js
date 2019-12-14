const express = require('express');
const bodyParser = require('body-parser');

const router=require("./backend/routes/allRoutes");

const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);



app.listen(8080, () => {
    console.log('Server started on port 8080...');
});