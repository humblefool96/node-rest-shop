const mongoose = require('mongoose');

const ProSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	prce: Number
});

module.exports = mongoose.model('Product', ProSchema);