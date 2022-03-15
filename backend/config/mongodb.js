const mongoose = require('mongoose');

const mongodb = async (uri) => {
	try {
		await mongoose.connect(uri, { family: 4, maxPoolSize: 10 });
		console.log('DB Connected!');
	} catch (error) {
		throw error;
	}
};

module.exports = mongodb;
