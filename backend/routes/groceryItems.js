const express = require('express');
const {
	getItem,
	getItems,
	createItem,
	deleteItem,
	updateItem,
} = require('../controllers/groceryItems');
const router = express.Router();

router.route('/').get(getItems).post(createItem);

router.route('/:id').get(getItem).delete(deleteItem).patch(updateItem);

module.exports = router;
