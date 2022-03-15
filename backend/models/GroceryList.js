const mongoose = require('mongoose');

const GroceryListSchema = new mongoose.Schema(
	{
		title: { type: String, maxlength: 255, trim: true },
		targetDate: { type: Date },
		completed: { type: Boolean, default: false },
		note: { type: String },
		totalCost: { type: Number },
		totalItems: { type: Number },
	},
	{ timestamps: true }
);

const GroceryList = mongoose.model(
	'GroceryList',
	GroceryListSchema,
	'grocerylists'
);

module.exports = GroceryList;
