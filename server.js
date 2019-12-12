const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
//const router = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(cors());
//app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
})