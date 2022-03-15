require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongodb = require('./config/mongodb');
const groceryItemsRouter = require('./routes/groceryItems');
const groceryListsRouter = require('./routes/groceryLists');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/grocery/lists', groceryListsRouter);
app.use('/api/v1/grocery/items', groceryItemsRouter);

app.all('/', (req, res) => res.sendStatus(200));

const start = async () => {
	try {
		await mongodb(process.env.DB_URI);
		app.listen(PORT, console.log('Server running on port ', PORT, '...'));
	} catch (error) {
		throw error;
	}
};

start();
