const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FormEntry = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required : true,
    },
    message: {
        type: String,
        required : true,
    },
});

module.exports = mongoose.model('FormEntry', FormEntry);