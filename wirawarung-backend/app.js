const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const itemsRoute = require('./routes/items');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/items', itemsRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
