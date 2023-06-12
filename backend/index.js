require('dotenv').config();
const express = require('express');
const cors = require('cors');
const homeRouter = require('./routes/home.js');
const bookRouter = require('./routes/book.js');
const db = require('./database.js');

const app = express();

app.use(express.json());
app.use(cors());

(async () => {
	try {
		await db.authenticate();
		await db.sync();

		console.log('Connected to database successfully! ;D');
	} catch (err) {
		throw new Error(err);
	}
})();

app.use('/home', homeRouter);

app.use('/book', bookRouter);

app.listen(process.env.PORT, () => {
	console.log('Connected to backend! :D');
});
