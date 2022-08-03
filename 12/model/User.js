
const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        id: String,
        password:String,
        name: String,
    }
);

module.exports = mongoose.model('user', userSchema);


