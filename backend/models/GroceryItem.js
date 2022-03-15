const mongoose = require('mongoose');

const GroceryItemSchema = new mongoose.Schema(
	{
		name: { type: String, trim: true, required: true, maxlength: 255 },
		quantity: { type: Number, default: 1 },
		unit: { type: String, maxlength: 255 },
		unitCost: { type: Number },
		cost: { type: Number },
		note: { type: String },
		complete: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const GroceryItem = mongoose.model(
	'GroceryItem',
	GroceryItemSchema,
	'groceryitems'
);

module.exports = GroceryItem;
