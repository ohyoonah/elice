const { Schema } = require("mongoose");

const ContactSchema = new Schema ({
  name: String,
  email: String,
  phone: String,
  message: String
});

exports.contactModel = mongoose.model('Contact', ContactSchema);