const GroceryList = require('../models/GroceryList');
const SHController = require('../middleware/SHController');

exports.getLists = SHController(async (req, res) => {
	const lists = await GroceryList.find({}, null, { sort: { updatedAt: -1 } });
	res.status(200).json(lists);
});

exports.getList = SHController(async (req, res) => {
	const list = await GroceryList.findById(req.params.id);
	if (list) {
		res.status(200).json(list);
	} else {
		res.sendStatus(404);
	}
});

exports.createList = SHController(async (req, res) => {
	const list = await GroceryList.create(req.body);
	res.status(201).json(list);
});

exports.deleteList = SHController(async (req, res) => {
	const list = await GroceryList.findByIdAndDelete(req.params.id);
	if (list) {
		res.status(200).json(list);
	} else {
		res.sendStatus(404);
	}
});

exports.updateList = SHController(async (req, res) => {
	const list = await GroceryList.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (list) {
		res.status(200).json(list);
	} else {
		res.sendStatus(404);
	}
});
