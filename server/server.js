const express = require('express');
const cors = require('cors')
const app = express();

require('./config/mongoose.config');
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/product.routes')(app);


const port = 8000;
app.listen(port, () => console.log(`Listening at Port: ${port}`));
