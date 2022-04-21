// Load our .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))

const guestBookRouter = require('./routers/guestbook');
app.use('/guestbook', guestBookRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`\n Server is running on port ${port}\n`);
});