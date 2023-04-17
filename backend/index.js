require('dotenv').config();
const express = require('express');
const cors = require('cors');
const homeRouter = require('./routes/home.js');
const bookRouter = require('./routes/book.js');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/home', homeRouter);

app.use('/book', bookRouter);

app.listen(process.env.PORT, () => {
	console.log('Connected to backend! :D');
});
