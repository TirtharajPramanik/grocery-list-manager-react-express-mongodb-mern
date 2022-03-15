const GroceryItem = require('../models/GroceryItem');
const SHController = require('../middleware/SHController');

exports.getItems = SHController(async (req, res) => {
	const items = await GroceryItem.find();
	res.status(200).json(items);
});

exports.getItem = SHController(async (req, res) => {
	const item = await GroceryItem.findById(req.params.id);
	if (item) {
		res.status(200).json(item);
	} else {
		res.sendStatus(404);
	}
});

exports.createItem = SHController(async (req, res) => {
	const item = await GroceryItem.create(req.body);
	res.status(201).json(item);
});

exports.deleteItem = SHController(async (req, res) => {
	const item = await GroceryItem.findByIdAndDelete(req.params.id);
	if (item) {
		res.status(200).json(item);
	} else {
		res.sendStatus(404);
	}
});

exports.updateItem = SHController(async (req, res) => {
	const item = await GroceryItem.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (item) {
		res.status(200).json(item);
	} else {
		res.sendStatus(404);
	}
});
