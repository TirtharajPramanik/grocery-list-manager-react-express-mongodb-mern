const express = require('express');
const {
	getList,
	getLists,
	createList,
	deleteList,
	updateList,
} = require('../controllers/groceryLists');
const router = express.Router();

router.route('/').get(getLists).post(createList);

router.route('/:id').get(getList).delete(deleteList).patch(updateList);

module.exports = router;
